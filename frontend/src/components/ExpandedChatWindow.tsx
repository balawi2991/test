"use client";

import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import TypingIndicator from "./TypingIndicator";
import MessageInput from "./MessageInput";
import { RefObject } from "react";

export interface Message {
  text: string;
  sender: "user" | "ai";
}

interface ExpandedChatWindowProps {
  messages: Message[];
  input: string;
  setInput: (val: string) => void;
  onSend: () => void;
  isTyping: boolean;
  onMinimize: () => void;
  muted: boolean;
  onToggleMute: () => void;
  inputRef: RefObject<HTMLInputElement>;
}

/**
 * ExpandedChatWindow
 * Full chat interface with header, message list, typing indicator, and input.
 */
export default function ExpandedChatWindow({
  messages,
  input,
  setInput,
  onSend,
  isTyping,
  onMinimize,
  muted,
  onToggleMute,
  inputRef,
}: ExpandedChatWindowProps) {
  return (
    <div
      className="w-[calc(100vw-2rem)] md:max-w-[350px] lg:max-w-[400px] h-[60vh] max-h-[700px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <ChatHeader
        onMinimize={onMinimize}
        muted={muted}
        onToggleMute={onToggleMute}
      />
      <MessageList messages={messages} />
      <TypingIndicator visible={isTyping} />
      <MessageInput
        input={input}
        setInput={setInput}
        onSend={onSend}
        inputRef={inputRef}
        disabled={isTyping}
      />
    </div>
  );
}
