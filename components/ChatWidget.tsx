import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService.ts';
import { ChatMessage, ChatSender } from '../types.ts';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm your Carolinas Mobile Home assistant. I can help with questions about title transfers, park approvals, and our guaranteed pricing model. How can I assist you today?",
      sender: ChatSender.BOT,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: ChatSender.USER,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => `${m.sender === ChatSender.USER ? 'User' : 'Assistant'}: ${m.text}`);
    const responseText = await sendMessageToGemini(history, userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: ChatSender.BOT,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-900 hover:bg-blue-800 text-white rounded-full p-5 shadow-2xl flex items-center justify-center transition-all hover:scale-110 group relative"
          aria-label="Open support chat"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full animate-ping"></div>
          <MessageSquare className="w-8 h-8" />
        </button>
      )}

      {isOpen && (
        <div 
          className="bg-white rounded-3xl shadow-2xl w-[90vw] sm:w-96 flex flex-col h-[550px] border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-300"
          role="complementary"
          aria-label="AI Support Chat"
        >
          <div className="bg-blue-900 p-5 flex justify-between items-center text-white">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <div>
                <span className="font-bold block">Mobile Home Specialist</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-300">Online Assistant</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm transition-all ${
                    msg.sender === ChatSender.USER
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl p-4 rounded-tl-none shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask a question..."
                className="flex-1 border border-gray-200 rounded-2xl px-5 py-3 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm bg-gray-50 transition-all outline-none"
                aria-label="Type your message"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-amber-600 text-white p-3 rounded-2xl hover:bg-amber-700 disabled:opacity-50 shadow-md transition-all flex items-center justify-center"
                aria-label="Send message"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};