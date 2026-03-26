"use client";

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false)
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<any[]>([
    {
      id: 'welcome-message',
      role: 'assistant',
      content: "Hi! I'm Thisila's AI assistant. 🚀 I can tell you about his MERN stack projects like CineScope. How can I help you?"
    }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowBanner(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isLoading) return;
    setShowBanner(false); 

    const userMessage = { id: Date.now().toString(), role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    const currentMessages = [...messages, userMessage];
    
    setText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/send/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: currentMessages }),
      });

      if (!response.ok) throw new Error('Failed to connect');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = { id: 'assistant-' + Date.now(), role: 'assistant', content: '' };
      
      setMessages((prev) => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const cleanChunk = chunk.replace(/^[0-9]:"|"$/g, '').replace(/\\n/g, '\n');
        assistantMessage.content += cleanChunk;
        setMessages((prev) => 
          prev.map((msg) => msg.id === assistantMessage.id ? { ...assistantMessage } : msg)
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4">
      
     
      {showBanner && !isOpen && (
        <div className="animate-bounce bg-white text-zinc-900 px-4 py-2 rounded-2xl shadow-2xl border border-blue-100 flex items-center gap-2 mb-2 cursor-pointer transition-all hover:scale-105"
             onClick={() => {setIsOpen(true); setShowBanner(false);}}>
          <Sparkles size={16} className="text-blue-600 animate-pulse" />
          <span className="text-xs font-bold">Ask me about my projects!</span>
          <X size={14} className="ml-2 text-zinc-400" onClick={(e) => {e.stopPropagation(); setShowBanner(false);}} />
        </div>
      )}

     
      <button 
        onClick={() => {setIsOpen(!isOpen); setShowBanner(false);}} 
        className={`relative p-5 rounded-full shadow-2xl text-white flex items-center justify-center transition-all active:scale-95 ${
          isOpen ? 'bg-zinc-800' : 'bg-blue-600 animate-pulse-slow'
        }`}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></span>
        )}
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

     
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 sm:w-[400px] h-[550px] bg-zinc-950/95 border border-white/10 rounded-3xl flex flex-col shadow-2xl overflow-hidden backdrop-blur-2xl ring-1 ring-white/20 animate-in fade-in zoom-in duration-300">
          <div className="p-5 border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-transparent flex items-center gap-3 font-bold text-white">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Bot size={18} />
            </div>
            <div>
                <h3 className="text-sm">Thisila's AI Agent</h3>
                <p className="text-[10px] text-blue-400 font-normal">Online & Ready to Help</p>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 text-sm custom-scrollbar">
            {messages.map((m) => (
              <div key={m.id} className={`${m.role === 'user' ? 'text-right' : 'text-left'} animate-in slide-in-from-bottom-2 duration-300`}>
                <div className={`inline-block p-4 rounded-2xl max-w-[85%] shadow-md ${
                  m.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-zinc-900/80 text-gray-200 border border-white/5 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-wrap text-[13px] leading-relaxed">{m.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left p-2 flex items-center gap-1.5 opacity-60">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-5 border-t border-white/10 bg-zinc-900/50 flex gap-2">
            <input
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white text-xs outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:opacity-50"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your message..."
            />
            <button 
              type="submit" 
              disabled={isLoading || !text.trim()} 
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-30 p-3 rounded-2xl text-white transition-all shadow-lg shadow-blue-600/20 active:scale-90"
            >
              <Send size={18}/>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}