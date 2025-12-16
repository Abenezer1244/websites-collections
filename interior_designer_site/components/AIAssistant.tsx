'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { generateDesignAdvice, generateDesignConceptImage } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const advice = await generateDesignAdvice(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: advice }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having a little trouble connecting to my design databases. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!input.trim() || isGeneratingImage) return;

    const prompt = input.trim();
    setIsGeneratingImage(true);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateDesignConceptImage(prompt);
      setGeneratedImage(imageUrl);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-24 px-6 bg-[#061911]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 mb-6 border border-yellow-400/20">
            <Bot className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Powered by Gemini</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Your AI Interior Assistant</h2>
          <p className="text-gray-400">Describe your space or a style you love, and let our AI provide expert design consultation.</p>
        </div>

        <div className="bg-[#0a2319] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col h-[600px] shadow-2xl">
          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                <Sparkles className="w-12 h-12 text-yellow-400/20" />
                <p className="text-center max-w-xs italic">
                  &quot;Try: How can I make a small living room feel larger with Japandi style?&quot;
                </p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-yellow-400 text-[#0a2319] font-medium'
                    : 'bg-white/5 text-gray-200 border border-white/10'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-yellow-400" />
                  <span className="text-sm text-gray-400">Curating design insights...</span>
                </div>
              </div>
            )}

            {generatedImage && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-2 rounded-2xl border border-white/10 overflow-hidden">
                  <img src={generatedImage} alt="AI Concept" className="rounded-xl max-w-full h-auto" />
                  <p className="p-3 text-xs text-yellow-400 flex items-center gap-2">
                    <Sparkles className="w-3 h-3" /> Visual concept generated
                  </p>
                </div>
              </div>
            )}
            {isGeneratingImage && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col gap-4 w-full">
                  <div className="animate-pulse bg-white/5 h-48 rounded-xl w-full"></div>
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-yellow-400" />
                    <span className="text-sm text-gray-400">Dreaming up your space... (This may take a moment)</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-[#0c2b1e] border-t border-white/5">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for advice or describe a room to visualize..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-yellow-400/50 transition-colors"
              />
              <button
                onClick={handleGenerateImage}
                disabled={!input.trim() || isGeneratingImage}
                title="Generate concept image"
                className="w-12 h-12 bg-white/5 text-yellow-400 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-50"
              >
                {isGeneratingImage ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImageIcon className="w-5 h-5" />}
              </button>
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-12 h-12 bg-yellow-400 text-[#0a2319] rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
