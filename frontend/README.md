# GlowChat Frontend

This is the **GlowChat** frontend application, built with Next.js, TypeScript, Tailwind CSS, Framer Motion and shadcn/ui. It implements an interactive Arabic chat interface with a rotating animated glow effect, contextual AI responses, and full RTL support.

## Prerequisites

- Node.js 16.x or newer
- npm (or yarn / pnpm)

## Getting Started

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   # or yarn
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open your browser at **http://localhost:3000** to see the application.

By default, the frontend listens on port **3000**.

## Project Structure

```
frontend/
├─ src/
│  ├─ app/
│  │  ├─ globals.css        # Global styles (Tajawal font, RTL, scrollbar)
│  │  ├─ layout.tsx         # Root layout (html dir, font load)
│  │  └─ page.tsx           # Home page (landing + GlowChat)
│  ├─ components/           # Reusable UI components
│  │  ├─ GlowChat.tsx       # Main chat wrapper (state & audio)
│  │  ├─ GlowEffect.tsx     # Conic-gradient glow effect
│  │  ├─ MinimizedChatBar.tsx
│  │  ├─ ExpandedChatWindow.tsx
│  │  ├─ ChatHeader.tsx
│  │  ├─ MessageList.tsx
│  │  ├─ MessageBubble.tsx
│  │  ├─ TypingIndicator.tsx
│  │  └─ MessageInput.tsx
│  ├─ hooks/                # Custom React hooks
│  │  └─ useChat.ts         # Manages messages, typing state, FIFO limits
│  └─ lib/
│     └─ chatService.ts     # Simulated AI service with 2s delay
├─ public/                  # Static assets (logos, icons)
├─ package.json             # Project dependencies and scripts
├─ tailwind.config.ts       # Tailwind CSS configuration
└─ tsconfig.json            # TypeScript configuration
```

## Key Features

- **Animated Glow Effect**  
  Conic-gradient glow (#fbbf24 → #f472b6 → #a78bfa) with 12px blur, rotating every 4s.
- **Framer Motion Transitions**  
  0.3s ease-in-out animations between minimized bar and expanded chat.
- **Dual-State Chat Interface**  
  Minimized capsule bar (280–320px) ↔ Expanded window (up to 400px).
- **Contextual AI Messaging**  
  Simulated Arabic responses after an exact 2s delay.  
  Typing indicator with animated three-dot bounce.
- **RTL & Typography**  
  Full right-to-left layout using **Tajawal Arabic Font**.
- **Input Validation & History**  
  Prevents empty/whitespace messages, enforces 500-char limit, and maintains a 50-message FIFO queue.
- **Responsive Design**  
  Optimized layouts for desktop (≥1024px), tablet (768–1023px), and mobile (<768px).

## Available Scripts

- `npm run dev` — Start development server (port 3000)
- `npm run build` — Build for production
- `npm start` — Run production server


## Troubleshooting & Notes

- **Port Conflicts**: Ensure **3000** is free or change via `next.config.js`.
- **Performance Logs**: Look for `[GlowEffect] FPS` in console (typically 50–60 FPS).
- **Media Errors**: Console may show `The element has no supported sources` if audio URLs are unavailable; you can mute or replace audio links.

---

For full monorepo overview and other documentation, please see the root [`/code/README.md`](../README.md).
