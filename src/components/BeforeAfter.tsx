"use client";
import { useRef, useState, useCallback } from "react";

type Props = {
  before: string;
  after: string;
  labelBefore?: string;
  labelAfter?: string;
  /** Proporção do card: "16/9", "4/3", etc. */
  aspect?: string;
};

export default function BeforeAfter({
  before,
  after,
  labelBefore = "Antes",
  labelAfter = "Depois",
  aspect = "4/3",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50); // % do slider

  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  const computePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return pos;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    return clamp(p);
  }, [pos]);

  const startDrag = (clientX: number) => setPos(computePos(clientX));

  const onMouseDown = (e: React.MouseEvent) => {
    startDrag(e.clientX);
    const onMove = (ev: MouseEvent) => setPos(computePos(ev.clientX));
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    startDrag(t.clientX);
    const onMove = (ev: TouchEvent) => setPos(computePos(ev.touches[0].clientX));
    const onEnd = () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
      window.removeEventListener("touchcancel", onEnd);
    };
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    window.addEventListener("touchcancel", onEnd);
  };

  return (
    <div className="my-8 w-full max-w-[500px] mx-auto">
      {/* Card com proporção fixa -> todos ficarão iguais */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl shadow-lg border border-neutral-200 bg-neutral-100 aspect-[4/3]"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
      >
        {/* AFTER (fundo) */}
        <img
          src={after}
          alt={labelAfter}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
        />

        {/* BEFORE (cortado à esquerda até ao slider) */}
        <img
          src={before}
          alt={labelBefore}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />

        {/* Linha divisória */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-[#c6a96b] pointer-events-none"
          style={{ left: `${pos}%`, transform: "translateX(-1.5px)" }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white bg-[var(--brand,#c6a96b)] shadow-md pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          ↔
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between text-sm text-neutral-700 mt-2 max-w-[500px] mx-auto px-2">
        <span>{labelBefore}</span>
        <span>{labelAfter}</span>
      </div>
    </div>
  );
}
