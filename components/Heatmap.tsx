"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function Heatmap() {
  return (
    <GitHubCalendar
      username="Pranish03"
      blockSize={14}
      blockMargin={4}
      fontSize={14}
      blockRadius={4}
      showColorLegend
      showWeekdayLabels
      showTotalCount={false}
      theme={{
        light: ["#d4d4d4", "#dbeafe", "#93c5fd", "#60a5fa", "#2563eb"],
        dark: ["#d4d4d4", "#236b44", "#1b9552", "#40d06e", "#70e89a"],
      }}
      className="text-neutral-600 scroll-smooth"
    />
  );
}
