"use client";

import { RefObject } from "react";

interface MessageInputProps {
  input: string;
  setInput: (val: string) => void;
  onSend: () => void;
  inputRef: RefObject<HTMLInputElement>;
  disabled: boolean;
}

/**
 * MessageInput
 * Input field and send button for chat.
 */
export default function MessageInput({
  input,
  setInput,
  onSend,
  inputRef,
  disabled,
}: MessageInputProps) {
  // Prevent empty or whitespace-only messages
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend();
    }
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
      <form className="flex items-center gap-2" onSubmit={handleSend} autoComplete="off">
        <input
          ref={inputRef}
          type="text"
          placeholder="اكتب رسالتك..."
          maxLength={500}
          className="flex-grow w-full px-4 py-2 bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF] transition-shadow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={disabled}
          autoFocus={false}
          autoComplete="off"
          dir="rtl"
        />
        <button
          type="submit"
          className="w-10 h-10 bg-[#28A745] text-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-green-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={disabled || !input.trim()}
          aria-label="إرسال الرسالة"
        >
          {/* Send icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform -rotate-90"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
