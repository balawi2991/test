# GlowChat Monorepo

GlowChat is an interactive Arabic chat interface featuring a distinctive animated glow effect around the chat interface and smooth Framer Motion transitions. This monorepo contains all project components and documentation.

## Project Structure

- **company_profile/**  
  Contains the company brief and prospect information.  
  • See `company_profile/company_brief.md`

- **frontend/**  
  Next.js application built with TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui components.  
  • See `frontend/README.md`

## Key Features

- **Animated Glow Effect**  
  Rotating conic-gradient glow (warm yellow `#fbbf24`, pink `#f472b6`, light purple `#a78bfa`) with `12px` blur and a continuous `4s` rotation cycle.
- **Framer Motion Transitions**  
  Smooth `0.3s` ease-in-out animations between minimized and expanded chat states.
- **Dual-State Chat Interface**  
  Minimized capsule-shaped bar (280px–320px width) and expanded chat window with session-persistent history.
- **Arabic RTL Support & Tajawal Font**  
  Full right-to-left design, all text in Arabic, using the Tajawal Arabic typeface.
- **Simulated AI Chat**  
  Contextual AI responses with a 2s typing delay and animated three-dot typing indicator.
- **Responsive Design**  
  Optimized layouts for desktop (1024px+), tablet (768–1023px), and mobile (<768px).

## Technology Stack

- **Frontend:** Next.js (React, TypeScript), Tailwind CSS, shadcn/ui components, Framer Motion
- **Typography:** Tajawal Arabic Font
- **Animation:** CSS conic-gradient & Framer Motion
- **Ports:** Frontend runs on port **3000**

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Additional Documentation

- **Prospect & Company Info:** `company_profile/company_brief.md`
- **Frontend Details & Setup:** `frontend/README.md`
