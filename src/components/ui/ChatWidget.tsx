"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Bot, MessageCircleMore, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="flex h-80 flex-col gap-4 overflow-y-auto p-4 bg-background-dark/50">
              {/* AI Message */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10">
                  <Bot size={18} className="text-accent-blue absolute" />
                </div>
                <div className="flex flex-col gap-1 max-w-[85%]">
                  <span className="text-xs font-medium text-text-dim ml-1">
                    Happiness AI
                  </span>
                  <div className="rounded-2xl rounded-tl-none bg-surface-dark border border-white/5 px-4 py-2 text-sm text-gray-200 shadow-sm">
                    {portfolioData.chat.greeting}
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-blue text-white">
                  <span className="text-xs font-bold">You</span>
                </div>
                <div className="flex flex-col gap-1 items-end max-w-[85%]">
                  <div className="rounded-2xl rounded-tr-none bg-accent-blue px-4 py-2 text-sm text-white shadow-sm">
                    What tech stack do you specialize in?
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-white/10">
                  <Bot size={18} className="text-accent-blue absolute" />
                </div>
                <div className="flex flex-col gap-1 max-w-[85%]">
                  <span className="text-xs font-medium text-text-dim ml-1">
                    Happiness AI
                  </span>
                  <div className="rounded-2xl rounded-tl-none bg-surface-dark border border-white/5 px-4 py-2 text-sm text-gray-200 shadow-sm">
                    I specialize in the Modern React Stack: React, Next.js,
                    TypeScript, and Tailwind CSS. I also have deep experience
                    with state management and backend integration via GraphQL.
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-white/5 bg-surface-dark/50 p-3">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {portfolioData.chat.suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    className="whitespace-nowrap rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-xs text-accent-blue hover:bg-accent-blue/20 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="w-full rounded-full border border-white/10 bg-black/40 py-2.5 pl-4 pr-10 text-sm text-white placeholder-text-dim/50 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                  disabled
                />
                <button
                  className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent-blue text-white hover:bg-blue-500 transition-colors"
                  aria-label="Send message"
                >
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
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
