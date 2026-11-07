import { Suspense } from "react";
import Heading from "@/components/Heading";
import ContributionCards from "@/components/ContributionCards";
import BlurReveal from "@/components/BlurReveal";
import { getContributions } from "@/lib/github-contributions";

function ContributionMessage({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-[var(--secondary)]">{children}</p>;
}

async function Contributions() {
  let contributions;

  try {
    contributions = await getContributions();
  } catch {
    return (
      <ContributionMessage>
        Contributions are temporarily unavailable. Please check back soon or{" "}
        <a
          href="https://github.com/shaikhFaris"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--foreground)] underline underline-offset-4"
        >
          visit my GitHub profile
        </a>
        .
      </ContributionMessage>
    );
  }

  if (contributions.length === 0) {
    return (
      <ContributionMessage>
        No public pull requests or issues in external repositories yet.
      </ContributionMessage>
    );
  }

  return <ContributionCards contributions={contributions} />;
}

export default function OpenSourceContributions() {
  return (
    <BlurReveal
      as="section"
      id="open-source-contributions"
      className="mt-8"
      order={4}
    >
      <Heading>OSS Contributions</Heading>
      <Suspense
        fallback={
          <div role="status">
            <ContributionMessage>Loading contributions…</ContributionMessage>
          </div>
        }
      >
        <Contributions />
      </Suspense>
    </BlurReveal>
  );
}
