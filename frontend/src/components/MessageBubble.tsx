"use client";

import { Message } from "./ExpandedChatWindow";

interface MessageBubbleProps {
  message: Message;
}

/**
 * MessageBubble
 * Single message bubble, styled for user or AI.
 */
export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user";
  return (
    <div
      className={`flex ${isUser ? "justify-start" : "justify-end"}`}
      dir="rtl"
    >
      <div
        className={`p-3 rounded-lg max-w-xs break-words ${
          isUser
            ? "bg-[#007BFF] text-white rounded-br-none"
            : "bg-gray-200 text-[#343A40] rounded-bl-none"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
