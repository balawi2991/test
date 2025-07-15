"use client";

import { useState } from "react";
import { getAIResponse } from "@/lib/chatService";
import type { Message } from "@/components/ExpandedChatWindow";

const MAX_MESSAGES = 50;

export default function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "مرحباً بك في جلو شات! كيف يمكنني مساعدتك اليوم؟",
      sender: "ai"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Add user message and trigger AI response
  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;
    addUserMessage(trimmed);
    setInput("");
    setIsTyping(true);

    // Simulate AI typing delay and response
    const aiResponse = await getAIResponse(trimmed);
    addAIMessage(aiResponse);
    setIsTyping(false);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => {
      const next = [...prev, { text, sender: "user" as const }];
      return next.length > MAX_MESSAGES ? next.slice(-MAX_MESSAGES) : next;
    });
  };

  const addAIMessage = (text: string) => {
    setMessages((prev) => {
      const next = [...prev, { text, sender: "ai" as const }];
      return next.length > MAX_MESSAGES ? next.slice(-MAX_MESSAGES) : next;
    });
  };

  // For manual typing indicator control (not used in this simple flow)
  const showTyping = () => setIsTyping(true);
  const hideTyping = () => setIsTyping(false);

  return {
    messages,
    input,
    setInput,
    sendMessage,
    isTyping,
    addUserMessage,
    addAIMessage,
    showTyping,
    hideTyping
  };
}
