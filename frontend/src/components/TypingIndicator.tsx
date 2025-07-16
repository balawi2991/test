"use client";

/**
 * TypingIndicator
 * Animated three-dot bouncing indicator for AI typing.
 */
interface TypingIndicatorProps {
  visible: boolean;
}

export default function TypingIndicator({ visible }: TypingIndicatorProps) {
  // Inject custom CSS for bounce animation with smooth easing and staggered delays
  if (typeof window !== 'undefined') {
    if (!document.getElementById('typing-indicator-style')) {
      const style = document.createElement('style');
      style.id = 'typing-indicator-style';
      style.innerHTML = `
        @keyframes typing-bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          40% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
        .typing-dot {
          animation: typing-bounce 1.2s infinite cubic-bezier(0.5, 0, 0.5, 1) both;
        }
        .typing-dot:nth-child(1) { animation-delay: 0s; }
        .typing-dot:nth-child(2) { animation-delay: 0.15s; }
        .typing-dot:nth-child(3) { animation-delay: 0.3s; }
      `;
      document.head.appendChild(style);
    }
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="p-4 flex items-center justify-center">
      <div className="bg-gray-200 rounded-lg p-2 flex space-x-1">
        <div className="typing-dot w-2 h-2 bg-gray-500 rounded-full"></div>
        <div className="typing-dot w-2 h-2 bg-gray-500 rounded-full"></div>
        <div className="typing-dot w-2 h-2 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
}
