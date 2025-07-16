"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import { getAIResponse } from "@/lib/chatService";
import type { Message } from "@/components/ExpandedChatWindow";

const MAX_MESSAGES = 50;

export default function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "مرحباً بك في جلو شات! كيف يمكنني مساعدتك اليوم؟", sender: "ai" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Send message to chat
  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) {
      return;
    }
    if (typeof window !== "undefined") {
      console.log(`[useChat] sendMessage invoked for \"${trimmed}\" at ${performance.now()}`);
    }
    addUserMessage(trimmed);
    setInput("");
    if (typeof window !== "undefined") {
      console.log(`[useChat] set isTyping=true at ${performance.now()}`);
    }
    setIsTyping(true);

    const aiResponse = await getAIResponse(trimmed);
    if (typeof window !== "undefined") {
      console.log(`[useChat] AI response received at ${performance.now()}`);
    }
    addAIMessage(aiResponse);
    setIsTyping(false);
    if (typeof window !== "undefined") {
      console.log(`[useChat] set isTyping=false at ${performance.now()}`);
    }
  };

  // Handle Enter key press on input to send message
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => {
      const next = [...prev, { text, sender: "user" as const }];
      return next.length > MAX_MESSAGES ? next.slice(-MAX_MESSAGES) : next;
    });
  };

  const addAIMessage = (text: string) => {
    setMessages(prev => {
      const next = [...prev, { text, sender: "ai" as const }];
      return next.length > MAX_MESSAGES ? next.slice(-MAX_MESSAGES) : next;
    });
  };

  return {
    messages,
    input,
    setInput,
    sendMessage,
    handleKeyPress,
    isTyping,
    addUserMessage,
    addAIMessage
  };
}
