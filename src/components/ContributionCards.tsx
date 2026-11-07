"use client";

import { motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { GoGitPullRequest, GoIssueOpened } from "react-icons/go";
import type { Contribution } from "@/lib/github-contributions";

const statusStyles: Record<Contribution["status"], string> = {
  Open: "text-green-500",
  Merged: "text-violet-500",
  Closed: "text-red-500",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export default function ContributionCards({
  contributions,
}: {
  contributions: Contribution[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <ul className="space-y-4">
      {contributions.map((contribution, index) => {
        const TypeIcon =
          contribution.type === "Pull Request" ? GoGitPullRequest : GoIssueOpened;

        return (
          <motion.li
            key={contribution.id}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
          >
            <a
              href={contribution.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${contribution.repository}: ${contribution.title} #${contribution.number} (${contribution.type}, ${contribution.status})`}
              className="group flex min-w-0 items-center gap-2 rounded-sm py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)] sm:gap-3"
            >
              <TypeIcon
                aria-hidden="true"
                className={`size-4 shrink-0 ${statusStyles[contribution.status]}`}
              />
              <span className="sr-only">
                {contribution.type}, {contribution.status}:
              </span>
              <h4 className="flex min-w-0 flex-1 items-center gap-1.5 text-sm">
                <span className="truncate">{contribution.title}</span>
                <span className="shrink-0 font-normal text-[var(--secondary)]">
                  #{contribution.number}
                </span>
              </h4>
              <span className="max-w-[20%] truncate text-xs text-[var(--secondary)] sm:max-w-[28%]">
                {contribution.repository}
              </span>
              <time
                dateTime={contribution.updatedAt}
                className="shrink-0 whitespace-nowrap text-[10px] text-[var(--secondary)] sm:text-xs"
              >
                <span className="sr-only">Updated </span>
                {dateFormatter.format(new Date(contribution.updatedAt))}
              </time>
              <span className="sr-only">View on GitHub (opens in a new tab)</span>
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
}
