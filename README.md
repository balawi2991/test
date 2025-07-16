# GlowChat Monorepo

GlowChat is an interactive Arabic chat interface featuring a distinctive animated glow effect, smooth Framer Motion transitions, and advanced messaging capabilities. This monorepo contains all project components and documentation needed to run, develop, and extend GlowChat.

## Repository Overview

- **company_profile/**  
  Contains company and prospect information (see `company_profile/company_brief.md`).
- **frontend/**  
  Next.js chat application built with TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui components.  
  See `frontend/README.md` for detailed setup and component documentation.

## Key Features

- **Animated Glow Effect**  
  Rotating conic-gradient glow (warm yellow `#fbbf24`, pink `#f472b6`, light purple `#a78bfa`) with `12px` blur and a continuous `4s` rotation cycle.
- **Framer Motion Transitions**  
  Smooth `0.3s` ease-in-out animations between minimized and expanded chat states.
- **Dual-State Chat Interface**  
  - **Minimized**: Capsule-shaped bar (280–320px width) fixed at bottom center.  
  - **Expanded**: Full chat window with header, message history, typing indicator, and input field.  
  - Session-persistent history (up to 50 messages, FIFO removal of oldest messages).
- **Message System**  
  - **Input Handling**: Send messages via Enter key or send-button click.  
  - **Validation**: Prevents empty or whitespace-only messages and enforces a 500-character input limit.  
  - **History Management**: FIFO queue for 50 messages.  
  - **Simulated AI Responses**: Contextual Arabic replies generated after an exact 2-second delay.
- **Typing Indicator**  
  Animated three-dot bouncing indicator that appears immediately upon message submission and disappears when the AI response is displayed.
- **Arabic RTL Support**  
  Full right-to-left layout with **Tajawal Arabic Font** integrated across all components.
- **Responsive Design**  
  Optimized for desktop (1024px+), tablet (768–1023px), and mobile (<768px) devices.

## Troubleshooting & Known Issues

- **Media Element Errors**  
  Console logs `The element has no supported sources` – verify that all audio/video elements have valid source URLs or fallback formats.
- **Performance Monitoring**  
  `[GlowEffect] FPS` logs indicate generally smooth performance (50–60 FPS), with occasional drops on lower-power devices.
- **Input & Display**  
  - Long messages may display truncated in the history component despite being accepted.  
  - Ensure `maxLength={500}` is set on the input field in `MessageInput.tsx`.

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Open your browser to **http://localhost:3000** (frontend runs on port **3000**).

## Additional Documentation

- **Company Profile**: `company_profile/company_brief.md`  
- **Frontend Setup & Component Reference**: `frontend/README.md`
