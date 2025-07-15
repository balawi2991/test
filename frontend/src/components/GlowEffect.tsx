"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  expanded: boolean;
}

/**
 * GlowEffect
 * Animated conic gradient glow, persistent in both minimized and expanded states.
 * Uses CSS keyframes for rotation and blur.
 */
export default function GlowEffect({ expanded }: GlowEffectProps) {
  // Custom CSS for conic gradient and animation
  // This is injected only once for the effect
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (styleRef.current) return;
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes glow-rotate {
        from { transform: rotate(0deg);}
        to { transform: rotate(360deg);}
      }
      .glow-effect-conic::before {
        content: '';
        position: absolute;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background: conic-gradient(from 180deg at 50% 50%, #fbbf24, #f472b6, #a78bfa, #fbbf24);
        animation: glow-rotate 4s linear infinite;
        z-index: -1;
      }
    `;
    document.head.appendChild(style);
    styleRef.current = style;
    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        "glow-effect-conic",
        expanded
          ? "rounded-3xl filter blur-[12px] overflow-hidden transition-all duration-300"
          : "rounded-full filter blur-[12px] overflow-hidden transition-all duration-300"
      )}
      aria-hidden="true"
    />
  );
}
