# Setup and Installation Guide

Follow these steps to recreate the GlowChat application from scratch.

## Prerequisites

- Node.js 16.x or newer
- npm (or yarn)

## Project Initialization

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd glowchat/frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or yarn install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
4. **Open in Browser**
   Navigate to: http://localhost:3000

## Key Dependencies

- **Next.js**: Framework for React SSR/SSG
- **React** / **React DOM**: UI library
- **TypeScript**: Static typing
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **shadcn/ui**: UI component library (Radix UI + Tailwind)

## Tailwind CSS Setup

1. Initialize config:
   ```bash
   npx tailwindcss init -p
   ```
2. Configure `tailwind.config.js` and include `globals.css` in `src/app/layout.tsx`.

## shadcn/ui Setup

1. Install:
   ```bash
   npm install @radix-ui/react-* class-variance-authority shadcn-ui
   ```
2. Initialize:
   ```bash
   npx shadcn-ui@latest init --disableInteractionPrompt
   ```

Following these steps will set up the development environment and run the GlowChat interface locally.
