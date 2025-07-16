"use client";

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import { Message } from "./ExpandedChatWindow";

interface MessageListProps {
  messages: Message[];
}

/**
 * MessageList
 * Scrollable container for conversation history.
 * Automatically scrolls to bottom on new message with smooth behavior.
 */
export default function MessageList({ messages }: MessageListProps) {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div
      ref={listRef}
      className="flex-grow p-2 md:p-4 space-y-4 overflow-y-auto custom-scrollbar"
      style={{ minHeight: 0, WebkitOverflowScrolling: 'touch' }}
      tabIndex={0}
      aria-live="polite"
    >
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} />
      ))}
    </div>
  );
}
