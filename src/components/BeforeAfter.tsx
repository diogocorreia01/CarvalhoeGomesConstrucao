"use client";
import React from "react";
import dynamic from "next/dynamic";

// Import dinâmico para evitar problemas de hidratação no Next.js
const ReactCompareImage = dynamic(() => import("react-compare-image"), {
  ssr: false,
});

interface BeforeAfterProps {
  before: string;
  after: string;
  labelBefore?: string;
  labelAfter?: string;
}

export default function BeforeAfter({
  before,
  after,
  labelBefore = "Antes",
  labelAfter = "Depois",
}: BeforeAfterProps) {
  return (
    <div className="my-8 w-full">
      <div className="relative w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
        <ReactCompareImage
          leftImage={before}
          rightImage={after}
          sliderLineColor="#c6a96b"
          sliderLineWidth={3}
          handle={
            <div className="flex items-center justify-center bg-[var(--brand)] text-white rounded-full w-8 h-8 shadow-lg">
              ↔
            </div>
          }
          aspectRatio="wider"
        />
      </div>
      <div className="flex justify-between text-sm text-neutral-700 mt-2 max-w-[500px] mx-auto px-2">
        <span>{labelBefore}</span>
        <span>{labelAfter}</span>
      </div>
    </div>
  );
}
