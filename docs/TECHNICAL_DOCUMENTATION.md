# Technical Documentation for Animated Glow Effect

This document details the implementation of the rotating conic-gradient glow effect in GlowChat.

## Component Location

File: `frontend/src/components/GlowEffect.tsx`

## CSS Keyframes

Vendor-prefixed and standard animations:

```css
@-webkit-keyframes glow-rotate {
  from { transform: rotate(0deg) translateZ(0); }
  to   { transform: rotate(360deg) translateZ(0); }
}
@keyframes glow-rotate {
  from { transform: rotate(0deg) translateZ(0); }
  to   { transform: rotate(360deg) translateZ(0); }
}
```

- **Rotation Duration**: 4s (one full 360° every 4 seconds)
- **Timing Function**: linear (constant speed)
- **Repeat**: infinite

## Conic Gradient Background

The pseudo-element `.glow-effect-conic::before` defines the gradient:

```css
background: -webkit-conic-gradient(from 180deg at 50% 50%, #fbbf24, #f472b6, #a78bfa, #fbbf24);
background: conic-gradient(from 180deg at 50% 50%, #fbbf24, #f472b6, #a78bfa, #fbbf24);
```

- **Colors**:
  - Warm Yellow: `#fbbf24`
  - Pink:       `#f472b6`
  - Light Purple:`#a78bfa`

## Blur Filter

Applied via Tailwind class:

```css
filter: blur(12px);
```

- **Blur Amount**: `12px`

## GPU Acceleration & Performance Optimizations

- **`translateZ(0)`**: Promotes element to its own GPU layer.
- **`will-change: transform`**: Hints to browser to optimize for transform changes.
- **Vendor Prefixes**: Included for broad browser support.

## FPS Monitoring

A `requestAnimationFrame` loop logs per-second FPS:

```ts
let last = performance.now(), count = 0;
function measure() {
  const now = performance.now();
  count++;
  if (now - last >= 1000) {
    console.log(`[GlowEffect] FPS: ${count}`);
    count = 0;
    last = now;
  }
  requestAnimationFrame(measure);
}
requestAnimationFrame(measure);
```

This ensures continuous performance visibility during development.
