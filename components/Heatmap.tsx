"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function Heatmap() {
  return (
    <GitHubCalendar
      username={`${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
      blockSize={14}
      blockMargin={4}
      fontSize={14}
      blockRadius={4}
      showColorLegend
      showWeekdayLabels
      showTotalCount={false}
      theme={{
        light: ["#d4d4d4", "#dbeafe", "#93c5fd", "#60a5fa", "#2563eb"],
        dark: ["#d4d4d4", "#008236", "#00a63e", "#00c950", "#05df72"],
      }}
      className="text-neutral-600 scroll-smooth bg-gree"
    />
  );
}
