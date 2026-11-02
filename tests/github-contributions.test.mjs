import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

// Run the server-only helper in isolation without starting Next.js or calling GitHub.
const source = readFileSync(
  new URL("../src/lib/github-contributions.ts", import.meta.url),
  "utf8",
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
});

function loadHelper(fetch, token) {
  const module = { exports: {} };
  vm.runInNewContext(outputText, {
    module,
    exports: module.exports,
    require(name) {
      assert.equal(name, "server-only");
      return {};
    },
    process: { env: token ? { GITHUB_TOKEN: token } : {} },
    fetch,
    URLSearchParams,
    AbortSignal,
  });
  return module.exports.getContributions;
}

function item(id, overrides = {}) {
  return {
    id,
    repository_url: "https://api.github.com/repos/community/project",
    html_url: `https://github.com/community/project/issues/${id}`,
    title: `Contribution ${id}`,
    number: id,
    user: { login: "shaikhFaris" },
    state: "open",
    updated_at: `2026-10-${String(id).padStart(2, "0")}T12:00:00Z`,
    ...overrides,
  };
}

function success(items, extra = {}) {
  return {
    ok: true,
    json: async () => ({ incomplete_results: false, items, ...extra }),
  };
}

test("combines PRs and issues, excludes own repositories and other authors before selecting five", async () => {
  const items = [
    item(10, { repository_url: "https://api.github.com/repos/SHAIKHFARIS/personal" }),
    item(9, { user: { login: "someoneElse" } }),
    item(8, { user: null }),
    item(1),
    item(6, { pull_request: { merged_at: null } }),
    item(3),
    item(5, { pull_request: { merged_at: "2026-10-05T11:00:00Z" } }),
    item(2),
    item(4, { user: { login: "SHAIKHFARIS" } }),
  ];
  const result = await loadHelper(async () => success(items))();

  assert.deepEqual(Array.from(result, (entry) => entry.id), [6, 5, 4, 3, 2]);
  assert.equal(result[0].type, "Pull Request");
  assert.equal(result[2].type, "Issue");
  assert.equal(result[0].repository, "community/project");
  assert.equal(result[0].url, items[4].html_url);
  assert.equal(result[0].number, 6);
  assert.equal(result[0].title, "Contribution 6");
  assert.equal(result[0].updatedAt, items[4].updated_at);
});

test("requests authored public external contributions sorted by updated date with hourly caching", async () => {
  const getContributions = loadHelper(async (input, options) => {
    const url = new URL(input);
    assert.equal(url.origin + url.pathname, "https://api.github.com/search/issues");
    assert.equal(url.searchParams.get("q"), "author:shaikhFaris -user:shaikhFaris is:public");
    assert.equal(url.searchParams.get("sort"), "updated");
    assert.equal(url.searchParams.get("order"), "desc");
    assert.equal(options.cache, "force-cache");
    assert.equal(options.next.revalidate, 3600);
    assert.equal(options.headers.Authorization, undefined);
    assert.equal(options.headers.Accept, "application/vnd.github+json");
    assert.ok(options.signal instanceof AbortSignal);
    return success([]);
  });

  assert.equal((await getContributions()).length, 0);
});

test("uses an optional server token without including it in returned data", async () => {
  const getContributions = loadHelper(async (_, options) => {
    assert.equal(options.headers.Authorization, "Bearer test-token");
    return success([item(1)]);
  }, "test-token");

  assert.equal(JSON.stringify(await getContributions()).includes("test-token"), false);
});

test("distinguishes merged PRs, unmerged closed PRs, open PRs, and issue states", async () => {
  const getContributions = loadHelper(async () => success([
    item(5, { state: "closed", pull_request: { merged_at: "2026-10-05T11:00:00Z" } }),
    item(4, { state: "closed", pull_request: { merged_at: null } }),
    item(3, { pull_request: { merged_at: null } }),
    item(2, { state: "closed" }),
    item(1),
  ]));

  assert.deepEqual(
    Array.from(await getContributions(), ({ type, status }) => [type, status]),
    [["Pull Request", "Merged"], ["Pull Request", "Closed"], ["Pull Request", "Open"], ["Issue", "Closed"], ["Issue", "Open"]],
  );
});

test("returns fewer than five when fewer qualifying contributions exist", async () => {
  const getContributions = loadHelper(async () => success([item(1), item(2)]));
  assert.equal((await getContributions()).length, 2);
});

for (const status of [401, 403, 429, 503]) {
  test(`rejects GitHub HTTP ${status} for the section's error state`, async () => {
    const getContributions = loadHelper(async () => ({ ok: false, status }));
    await assert.rejects(getContributions(), new RegExp(String(status)));
  });
}

test("rejects incomplete search results instead of presenting an inaccurate latest five", async () => {
  const getContributions = loadHelper(async () => success([item(1)], { incomplete_results: true }));
  await assert.rejects(getContributions(), /incomplete/);
});

test("rejects malformed payloads for the section's error state", async () => {
  const getContributions = loadHelper(async () => success(null));
  await assert.rejects(getContributions(), /incomplete/);
});

test("propagates network failures for the section's error state", async () => {
  const getContributions = loadHelper(async () => { throw new Error("Network unavailable"); });
  await assert.rejects(getContributions(), /Network unavailable/);
});
