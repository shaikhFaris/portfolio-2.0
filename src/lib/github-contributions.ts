import "server-only";

const GITHUB_USERNAME = "shaikhFaris";
const GITHUB_API = "https://api.github.com";

export type Contribution = {
  id: number;
  repository: string;
  title: string;
  number: number;
  type: "Pull Request" | "Issue";
  status: "Open" | "Merged" | "Closed";
  updatedAt: string;
  url: string;
};

type GitHubSearchItem = {
  id: number;
  repository_url: string;
  html_url: string;
  title: string;
  number: number;
  user: { login: string } | null;
  state: "open" | "closed";
  updated_at: string;
  pull_request?: { merged_at: string | null };
};

type GitHubSearchResponse = {
  incomplete_results: boolean;
  items: GitHubSearchItem[];
};

export async function getContributions(): Promise<Contribution[]> {
  const params = new URLSearchParams({
    // The issues search endpoint returns both PRs and issues, never other activity.
    // Exclude owned/private repositories in the query, before GitHub limits results.
    q: `author:${GITHUB_USERNAME} -user:${GITHUB_USERNAME} is:public`,
    sort: "updated",
    order: "desc",
    per_page: "30",
  });
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(`${GITHUB_API}/search/issues?${params}`, {
    headers,
    cache: "force-cache",
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`GitHub contributions request failed (${response.status}).`);
  }

  const data: GitHubSearchResponse = await response.json();

  if (data.incomplete_results || !Array.isArray(data.items)) {
    throw new Error("GitHub returned incomplete contribution results.");
  }

  return data.items
    .map((item) => ({
      item,
      repository: item.repository_url.replace(`${GITHUB_API}/repos/`, ""),
    }))
    .filter(
      ({ item, repository }) =>
        item.user?.login.toLowerCase() === GITHUB_USERNAME.toLowerCase() &&
        repository.split("/")[0].toLowerCase() !== GITHUB_USERNAME.toLowerCase(),
    )
    .sort((a, b) => Date.parse(b.item.updated_at) - Date.parse(a.item.updated_at))
    .slice(0, 5)
    .map(({ item, repository }) => ({
      id: item.id,
      repository,
      title: item.title,
      number: item.number,
      type: item.pull_request ? "Pull Request" : "Issue",
      status: item.pull_request?.merged_at
        ? "Merged"
        : item.state === "open"
          ? "Open"
          : "Closed",
      updatedAt: item.updated_at,
      url: item.html_url,
    }));
}
