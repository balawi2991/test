"use client";

/**
 * TypingIndicator
 * Animated three-dot indicator for AI typing.
 */
interface TypingIndicatorProps {
  visible: boolean;
}

export default function TypingIndicator({ visible }: TypingIndicatorProps) {
  // Custom CSS for bounce animation and staggered delays
  // This is injected only once for the effect
  if (typeof window !== "undefined") {
    if (!document.getElementById("typing-indicator-style")) {
      const style = document.createElement("style");
      style.id = "typing-indicator-style";
      style.innerHTML = `
        @keyframes typing-bounce {
          0%, 80%, 100% { transform: scale(0);}
          40% { transform: scale(1.0);}
        }
        .typing-dot {
          animation: typing-bounce 1.4s infinite ease-in-out both;
        }
        .typing-dot:nth-child(1) { animation-delay: -0.32s;}
        .typing-dot:nth-child(2) { animation-delay: -0.16s;}
      `;
      document.head.appendChild(style);
    }
  }

  if (!visible) return null;

  return (
    <div className="p-4 flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
        {/* Placeholder: Replace with assistant avatar if needed */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="bg-gray-200 rounded-lg p-3 flex items-center space-x-1 space-x-reverse">
        <div className="typing-dot w-2 h-2 bg-gray-500 rounded-full"></div>
        <div className="typing-dot w-2 h-2 bg-gray-500 rounded-full"></div>
        <div className="typing-dot w-2 h-2 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
}
