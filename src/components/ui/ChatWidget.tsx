"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Bot, MessageCircleMore, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

type Role = "assistant" | "user";

type ChatMessage = {
  id: string;
  role: Role;
  text: string;
  createdAt: number;
};

function uid() {
  // good enough for UI ids
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

/**
 * Very simple "AI" for now:
 * - routes based on keywords
 * - falls back to a generic helpful response
 * Later you can swap this with a real API call.
 */
function getAssistantReply(question: string) {
  const q = question.toLowerCase();

  // Examples — adjust to your portfolio content
  if (q.includes("tech") || q.includes("stack")) {
    return (
      portfolioData.chat.answers?.techStack ??
      "I specialize in the Modern React Stack: React, Next.js, TypeScript, and Tailwind CSS. I also work a lot with state management and backend integration."
    );
  }

  if (q.includes("word") || q.includes("add-in") || q.includes("addin")) {
    return (
      portfolioData.chat.answers?.wordAddIn ??
      "The Word Add-in is a productivity tool that helps users generate structured content inside Word, with UI controls, templates, and consistent formatting."
    );
  }

  if (q.includes("saas") || q.includes("conversion")) {
    return (
      portfolioData.chat.answers?.saasConversion ??
      "For SaaS conversion, I focus on modular architecture, tenant-aware auth, billing boundaries, and analytics — while keeping onboarding friction low."
    );
  }

  return (
    portfolioData.chat.answers?.fallback ??
    "Ask me about a specific project, a skill (React/Next.js), or how I approached a challenge — and I’ll break it down clearly."
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const createdAt = new Date().getTime();

  // Seed the chat with the greeting once
  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        id: uid(),
        role: "assistant",
        text: portfolioData.chat.greeting,
        createdAt: createdAt,
      },
    ],
    [createdAt]
  );

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  // Scroll-to-bottom
  const listRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!isOpen) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, isOpen]);

  // Optional: reset chat each time it opens (comment out if you want persistence)
  // useEffect(() => {
  //   if (isOpen) setMessages(initialMessages);
  // }, [isOpen, initialMessages]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    // append user message
    const userMsg: ChatMessage = {
      id: uid(),
      role: "user",
      text: trimmed,
      createdAt: createdAt,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // fake "typing…"
    setIsTyping(true);

    // Simulate latency so it feels real (remove if you want instant)
    await new Promise((r) => setTimeout(r, 450));

    const replyText = getAssistantReply(trimmed);

    const botMsg: ChatMessage = {
      id: uid(),
      role: "assistant",
      text: replyText,
      createdAt: createdAt,
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const onSuggested = (q: string) => {
    // opens the widget (nice UX)
    if (!isOpen) setIsOpen(true);
    send(q);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-2 w-80 sm:w-96 overflow-hidden rounded-2xl border border-white/10 bg-surface-dark/90 backdrop-blur-xl shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-tr from-accent-blue to-purple-500">
                  <Bot size={18} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-white">
                  Happiness AI
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-dim hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={26} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={listRef}
              className="flex h-80 flex-col gap-4 overflow-y-auto p-4 bg-background-dark/50"
            >
              {messages.map((m) =>
                m.role === "assistant" ? (
                  <div key={m.id} className="flex items-start gap-3">
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10">
                      <Bot size={18} className="text-accent-blue" />
                    </div>
                    <div className="flex flex-col gap-1 max-w-[85%]">
                      <span className="text-xs font-medium text-text-dim ml-1">
                        Happiness AI
                      </span>
                      <div className="rounded-2xl rounded-tl-none bg-surface-dark border border-white/5 px-4 py-2 text-sm text-gray-200 shadow-sm whitespace-pre-wrap">
                        {m.text}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={m.id}
                    className="flex items-start gap-3 flex-row-reverse"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-blue text-white">
                      <span className="text-xs font-bold">You</span>
                    </div>
                    <div className="flex flex-col gap-1 items-end max-w-[85%]">
                      <div className="rounded-2xl rounded-tr-none bg-accent-blue px-4 py-2 text-sm text-white shadow-sm whitespace-pre-wrap">
                        {m.text}
                      </div>
                    </div>
                  </div>
                )
              )}

              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10">
                    <Bot size={18} className="text-accent-blue" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-surface-dark border border-white/5 px-4 py-2 text-sm text-gray-200 shadow-sm">
                    <span className="inline-flex gap-1">
                      <span className="animate-bounce">•</span>
                      <span className="animate-bounce [animation-delay:120ms]">
                        •
                      </span>
                      <span className="animate-bounce [animation-delay:240ms]">
                        •
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-white/5 bg-surface-dark/50 p-3">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {portfolioData.chat.suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSuggested(q)}
                    className="whitespace-nowrap rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-xs text-accent-blue hover:bg-accent-blue/20 transition-colors"
                    type="button"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <form
                className="relative flex items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Ask a question..."
                  className="w-full rounded-full border border-white/10 bg-black/40 py-2.5 pl-4 pr-10 text-sm text-white placeholder-text-dim/50 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent-blue text-white hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <ArrowUp size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue shadow-lg shadow-accent-blue/30 transition-all hover:shadow-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background-dark"
        aria-label="Open AI assistant"
        aria-expanded={isOpen}
      >
        <MessageCircleMore className="text-white" />
        <span className="absolute right-16 rounded bg-surface-dark px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap border border-white/10">
          Ask AI Assistant
        </span>
      </motion.button>
    </>
  );
}
