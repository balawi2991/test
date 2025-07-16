# Code Examples and Best Practices

This document illustrates key code patterns for responsive design, touch optimization, message handling, and animations.

## Responsive Design

### Minimized Chat Bar

```tsx
<div className="w-[280px] md:w-[300px] lg:w-[320px] h-14 ...">
  {/* 280px on mobile, 300px tablet, 320px desktop */}
</div>
```

### Expanded Window

```tsx
<div className="w-[calc(100vw-2rem)] md:max-w-[350px] lg:max-w-[400px] ...">
  {/* adapts to viewport width */}
</div>
```

## Touch Optimization

- **Tap Handler**: `onTouchStart={onExpand}` in `MinimizedChatBar` for mobile taps.
- **Input Attributes**: 
  ```tsx
  <input
    inputMode="text"
    enterKeyHint="send"
    dir="rtl"
    maxLength={500}
    ...
  />
  ```
- **Momentum Scrolling**:
  ```css
  style={{ WebkitOverflowScrolling: 'touch' }}
  ```

## Message System Example

```ts
// useChat.ts
const addUserMessage = text => setMessages(prev => {
  const next = [...prev, { text, sender: 'user' }];
  return next.length > MAX_MESSAGES ? next.slice(-MAX_MESSAGES) : next;
});
```

## Typing Indicator Animation

```css
@keyframes typing-bounce {
  0%,80%,100% { transform: translateY(0); opacity:0.6; }
  40% { transform: translateY(-4px); opacity:1; }
}
.typing-dot {
  animation: typing-bounce 1.2s infinite cubic-bezier(0.5,0,0.5,1) both;
}
```

## Framer Motion Pattern

```tsx
<motion.div
  initial={{ opacity:0, scale:0.95 }}
  animate={{ opacity:1, scale:1 }}
  exit={{ opacity:0, scale:0.95 }}
  transition={{ duration:0.3, ease:'easeInOut' }}
>
  {/* ... */}
</motion.div>
```

Use these examples to maintain consistent, responsive, and performant code across the project.
