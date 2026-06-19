"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { LuArrowRight } from "react-icons/lu";

const Heatmap = dynamic(() => import("@/components/Heatmap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="py-20 max-w-190 mx-auto px-5">
      <Image
        src="/profile.jpg"
        alt="Pranish Chaulagain"
        width={120}
        height={120}
        className="mb-5 rounded-[10px] object-cover"
        priority
      />

      <h1 className="text-[38px] text-zinc-900 mb-5 leading-[1.2] font-medium tracking-tight">
        Hi I&apos;m Pranish Chaulagain —{" "}
        <span className="text-zinc-900/60">
          full stack developer & ML enthusiast.
        </span>
      </h1>

      <p className="text-zinc-600 mb-5 leading-relaxed">
        I&apos;m a developer who loves building things from scratch, whether
        it&apos;s a backend system, a compiler, or just a clean UI. I spend my
        free time messing with algorithms and AI/ML, trying to understand how
        things actually work.
      </p>

      <div className="flex items-center gap-5 mb-12">
        <button className="group flex items-center gap-2.5 bg-neutral-900 font-medium text-white py-1 ps-1 pe-3.5 rounded-[10px] cursor-pointer hover:bg-neutral-800 transition-colors">
          <span className="bg-green-700 size-9 flex items-center justify-center rounded-md">
            <LuArrowRight
              size={20}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </span>
          View Work
        </button>
      </div>

      <Heatmap />
    </div>
  );
}
