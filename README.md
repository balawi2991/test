# GlowChat Monorepo

This monorepo bundles the complete GlowChat solution, including the interactive Arabic chat frontend, comprehensive developer documentation, and a brief company profile.

## Contents

- **company_profile/**
  - `company_brief.md` – Prospect and company overview.
- **frontend/**
  - Next.js + TypeScript + Tailwind CSS + Framer Motion + shadcn/ui chat application.
  - See [`frontend/README.md`](frontend/README.md) for installation, architecture overview, and component reference.
- **docs/**
  - Detailed guides and reference materials:
    - [Developer Implementation Guide](docs/DEVELOPER_IMPLEMENTATION_GUIDE.md)
    - [Technical Glow Effect Docs](docs/TECHNICAL_DOCUMENTATION.md)
    - [Framer Motion Integration Guide](docs/FRAMER_MOTION_GUIDE.md)
    - [RTL & Tajawal Font Configuration](docs/ARABIC_RTL_IMPLEMENTATION.md)
    - [Component Architecture & Message System](docs/COMPONENT_ARCHITECTURE.md)
    - [Setup & Installation Guide](docs/SETUP_GUIDE.md)
    - [Code Examples & Best Practices](docs/CODE_EXAMPLES.md)

## Getting Started

### Prerequisites

- **Node.js** v16.x or newer
- **npm** (or yarn / pnpm)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open your browser at http://localhost:3000 —the frontend listens on port 3000 by default.

## Project Structure

```
company_profile/     # Company overview documents
docs/                # Developer & technical documentation
frontend/            # Next.js chat application
  ├─ public/         # Static assets
  ├─ src/            # Application code
  ├─ package.json    # Dependencies & scripts
  └─ tailwind.config.ts
README.md            # This file (monorepo overview)
```

## Key Features

- **Animated Glow Effect**: Rotating conic-gradient (yellow → pink → purple) with 12px blur, 4s cycle.
- **Framer Motion Transitions**: 0.3s ease-in-out animations between minimized capsule bar and expanded chat window.
- **Dual-State Chat**: Capsule bar (280–320px) ↔ Expanded window (up to 400px) with session-persistent history (FIFO, 50 messages).
- **Contextual AI Messaging**: Simulated Arabic responses after an exact 2s delay, triggered by Enter key or send button.
- **Typing Indicator**: Animated three-dot bounce during AI response delay.
- **RTL & Typography**: Full right-to-left layout using Tajawal Arabic font.
- **Input Validation & History**: Prevents empty/whitespace messages, enforces 500-char limit, maintains a 50-message FIFO queue.
- **Responsive Design**: Tailwind breakpoints for desktop (≥1024px), tablet (768–1023px), and mobile (<768px).

## Troubleshooting & Notes

- **Media Element Errors**: Console may log `The element has no supported sources` if audio URLs are invalid. Verify or replace audio assets.
- **Performance Logs**: Look for `[GlowEffect] FPS` messages in the browser console during development.
- **Input Limit**: The `<MessageInput>` component enforces `maxLength={500}` to avoid oversized messages.

---

For details on any component, feature, or development step, consult the linked documentation under **docs/** or the **frontend/README.md** file.
