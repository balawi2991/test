"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlowEffect from "./GlowEffect";
import MinimizedChatBar from "./MinimizedChatBar";
import ExpandedChatWindow from "./ExpandedChatWindow";
import useChat from "@/hooks/useChat";

// Audio files (public domain, can be replaced with custom ones)
// NOTE: We do NOT preload the audio files to avoid unnecessary warnings/errors.
const MESSAGE_SENT_SOUND =
  "https://cdn.pixabay.com/audio/2022/03/15/audio_75153cf2e4.mp3";
const MESSAGE_RECEIVED_SOUND =
  "https://cdn.pixabay.com/audio/2022/03/10/audio_c35eb435a2.mp3";

export default function GlowChat() {
  const [expanded, setExpanded] = useState(false);
  const [muted, setMuted] = useState(false);

  // Chat state and logic from custom hook
  const {
    messages,
    input,
    setInput,
    sendMessage,
    isTyping,
    addUserMessage,
    addAIMessage,
    showTyping,
    hideTyping
  } = useChat();

  // Audio refs
  const sentAudioRef = useRef<HTMLAudioElement | null>(null);
  const receivedAudioRef = useRef<HTMLAudioElement | null>(null);

  // Play sound on message send/receive
  useEffect(() => {
    if (!messages.length) return;
    const last = messages[messages.length - 1];
    if (muted) return;
    if (last.sender === "user" && sentAudioRef.current) {
      sentAudioRef.current.currentTime = 0;
      sentAudioRef.current.play();
    } else if (last.sender === "ai" && receivedAudioRef.current) {
      receivedAudioRef.current.currentTime = 0;
      receivedAudioRef.current.play();
    }
  }, [messages, muted]);

  // Focus input when expanded
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  // Keyboard shortcut: ESC to minimize
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (expanded && e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [expanded]);

  // Session persistence (optional, can be improved)
  // useEffect(() => {
  //   if (messages.length)
  //     sessionStorage.setItem("glowchat-messages", JSON.stringify(messages));
  // }, [messages]);

  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
      style={{ direction: "rtl" }}
      aria-live="polite"
    >
      <div className="relative w-full h-full transition-all duration-300 ease-in-out">
        <GlowEffect expanded={expanded} />
        <AnimatePresence initial={false}>
          {!expanded && (
            <motion.div
              key="minimized"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10"
            >
              <MinimizedChatBar
                onExpand={() => setExpanded(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.95, pointerEvents: "none" }}
              animate={{ opacity: 1, scale: 1, pointerEvents: "auto" }}
              exit={{ opacity: 0, scale: 0.95, pointerEvents: "none" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-20"
            >
              <ExpandedChatWindow
                messages={messages}
                input={input}
                setInput={setInput}
                onSend={sendMessage}
                isTyping={isTyping}
                onMinimize={() => setExpanded(false)}
                muted={muted}
                onToggleMute={() => setMuted((m) => !m)}
                inputRef={inputRef}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Audio elements for sound feedback (do NOT preload to avoid warnings) */}
        <audio ref={sentAudioRef} src={MESSAGE_SENT_SOUND} />
        <audio ref={receivedAudioRef} src={MESSAGE_RECEIVED_SOUND} />
      </div>
    </div>
  );
}
