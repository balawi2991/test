"use client";

import { cn } from "@/lib/utils";

interface MinimizedChatBarProps {
  onExpand: () => void;
}

/**
 * MinimizedChatBar
 * Capsule-shaped minimized chat bar with placeholder and chat icon.
 * Clicking expands the chat window.
 */
export default function MinimizedChatBar({ onExpand }: MinimizedChatBarProps) {
  return (
    <div
      className={cn(
        "w-[280px] md:w-[320px] h-14 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl cursor-pointer flex items-center px-4 transition-all duration-300 ease-in-out overflow-hidden"
      )}
      tabIndex={0}
      role="button"
      aria-label="افتح الدردشة"
      onClick={onExpand}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onExpand();
      }}
    >
      <p className="text-gray-500 flex-grow text-right px-2 select-none">
        {/* Placeholder: replace with localized string if needed */}
        ابدأ محادثة مع المساعد الذكي...
      </p>
      <div className="w-10 h-10 bg-[#007BFF] rounded-full flex items-center justify-center flex-shrink-0">
        {/* Chat icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </div>
    </div>
  );
}
