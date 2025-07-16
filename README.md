# GlowChat Monorepo

An interactive Arabic chat interface featuring:

- Distinctive animated glow effect
- Smooth Framer Motion transitions
- Contextual AI messaging with typing indicators
- Full RTL support using Tajawal Arabic Font
- Responsive layouts for desktop, tablet, and mobile

---

## Prerequisites

- Node.js 16.x or newer
- npm (or yarn/pnpm)

## Getting Started

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open your browser at **http://localhost:3000**

The frontend listens on port **3000** by default.

---

## Repository Structure

- **company_profile/**
  - `company_brief.md` – Prospect and company overview
- **frontend/**
  - Next.js + TypeScript + Tailwind CSS chat application
  - **See** `frontend/README.md` for setup details, component reference, and feature documentation

---

## Key Features

- **Animated Glow**: Conic-gradient glow (warm yellow `#fbbf24`, pink `#f472b6`, light purple `#a78bfa`) with 12 px blur, rotating every 4 s
- **Framer Motion**: 0.3 s ease-in-out transitions between minimized capsule bar and expanded chat window
- **Dual-State Chat**: Minimized capsule (280–320 px width) ↔ Expanded window (up to 400 px width) with session-persistent history (FIFO, 50 messages)
- **AI Messaging**: Send via Enter or button; input validation (non-empty, ≤ 500 chars); simulated AI replies after exactly 2 s delay
- **Typing Indicator**: Animated three-dot bounce during AI response delay
- **RTL & Typography**: Right-to-left layout and Tajawal font across all UI elements
- **Responsive Design**: Tailwind breakpoints for desktop (≥ 1024 px), tablet (768–1023 px), and mobile (< 768 px)

---

## Troubleshooting & Known Issues

- **Media Element Errors**: Console may log `The element has no supported sources` – ensure any audio/video assets have valid URLs or fallbacks
- **Performance Logs**: `[GlowEffect] FPS` logs appear in console (generally 50–60 FPS)
- **Input Limit**: Ensure `maxLength={500}` is set on the input field (`MessageInput.tsx`)

---

## Additional Documentation

- **Company Profile**: `company_profile/company_brief.md`
- **Frontend Docs & Component Reference**: `frontend/README.md`
