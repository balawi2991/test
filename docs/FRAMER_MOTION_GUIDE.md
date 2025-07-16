# Framer Motion Integration Guide

This guide explains how state transitions between minimized and expanded chat states are implemented using Framer Motion in GlowChat.

## AnimatePresence Wrapper

Wrap conditional children to animate them in and out smoothly:

```tsx
<AnimatePresence initial={false}>
  {expanded ? <ExpandedMotion /> : <MinimizedMotion />}  
</AnimatePresence>
```

## Minimized Chat Bar Animation

```tsx
<motion.div
  key="minimized"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
  className="relative z-10"
>
  <MinimizedChatBar onExpand={() => setExpanded(true)} />
</motion.div>
```

## Expanded Chat Window Animation

```tsx
<motion.div
  key="expanded"
  initial={{ opacity: 0, scale: 0.95, pointerEvents: 'none' }}
  animate={{ opacity: 1, scale: 1, pointerEvents: 'auto' }}
  exit={{ opacity: 0, scale: 0.95, pointerEvents: 'none' }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
  className="relative z-20"
>
  <ExpandedChatWindow {...props} />
</motion.div>
```

## Configuration Details

- **`duration: 0.3`** seconds for entry and exit transitions.
- **`ease: 'easeInOut'`** for smooth acceleration and deceleration.
- **Initial & Exit States**: Slightly scaled down (`scale: 0.95`) and transparent (`opacity: 0`).

Use these examples to add or modify transition animations for other UI elements.
