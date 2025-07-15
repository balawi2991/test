"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  expanded: boolean;
}

/**
 * GlowEffect
 * Animated conic gradient glow, persistent in both minimized and expanded states.
 * Uses CSS keyframes for rotation and blur. Optimized for GPU acceleration and cross-browser compatibility.
 * Includes FPS monitoring for performance validation.
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
      /* Vendor-prefixed keyframes for cross-browser compatibility */
      @-webkit-keyframes glow-rotate {
        from { transform: rotate(0deg) translateZ(0); }
        to { transform: rotate(360deg) translateZ(0); }
      }
      @keyframes glow-rotate {
        from { transform: rotate(0deg) translateZ(0); }
        to { transform: rotate(360deg) translateZ(0); }
      }

      .glow-effect-conic::before {
        content: '';
        position: absolute;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        /* Conic gradient with vendor prefix fallback */
        background: -webkit-conic-gradient(from 180deg at 50% 50%, #fbbf24, #f472b6, #a78bfa, #fbbf24);
        background: conic-gradient(from 180deg at 50% 50%, #fbbf24, #f472b6, #a78bfa, #fbbf24);
        z-index: -1;
        /* Enable GPU acceleration */
        transform: translateZ(0);
        will-change: transform;
        /* Animation with vendor prefixes */
        -webkit-animation: glow-rotate 4s linear infinite;
        -moz-animation: glow-rotate 4s linear infinite;
        -o-animation: glow-rotate 4s linear infinite;
        animation: glow-rotate 4s linear infinite;
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

  // Performance monitoring: measure frames per second for the glow animation
  useEffect(() => {
    let lastFrameTime = performance.now();
    let frameCount = 0;
    let animating = true;

    function measureFPS() {
      const now = performance.now();
      frameCount++;
      if (now - lastFrameTime >= 1000) {
        console.log(`[GlowEffect] FPS: ${frameCount}`);
        frameCount = 0;
        lastFrameTime = now;
      }
      if (animating) {
        requestAnimationFrame(measureFPS);
      }
    }

    requestAnimationFrame(measureFPS);

    return () => {
      animating = false;
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
