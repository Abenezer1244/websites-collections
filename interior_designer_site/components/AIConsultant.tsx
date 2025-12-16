
import React, { useState, useRef } from 'react';
import { askInteriorConsultant } from '../services/geminiService';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Poliform. I am your AI Design Consultant. How can I help you elevate your space today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage: Message = { role: 'user', text: input, image: selectedImage || undefined };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setSelectedImage(null);
    setIsLoading(true);

    try {
      const response = await askInteriorConsultant(input || "What can you tell me about this design?", selectedImage || undefined);
      setMessages(prev => [...prev, { role: 'model', text: response || "I'm sorry, I couldn't process that request." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "There was an error connecting to the design studio. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all hover:bg-gray-900 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Consultant Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center md:justify-end md:items-end md:p-8 bg-black/20 backdrop-blur-sm">
          <div className="bg-white w-full h-full md:w-[450px] md:h-[650px] md:rounded-[40px] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
            {/* Header */}
            <div className="px-8 py-6 border-b flex items-center justify-between bg-[#fdfdfb]">
              <div>
                <h3 className="font-bold text-lg">AI Design Studio</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Poliform Consultant</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-gray-50/30">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] rounded-[24px] p-4 text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-black text-white rounded-tr-none' 
                      : 'bg-[#f2f1ed] text-gray-800 rounded-tl-none'
                  }`}>
                    {m.image && (
                      <img src={m.image} alt="Upload" className="mb-2 rounded-xl w-full h-auto object-cover max-h-48" />
                    )}
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center space-x-2 text-gray-400 animate-pulse">
                   <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                   <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                   <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t bg-white">
              {selectedImage && (
                <div className="mb-4 relative inline-block">
                  <img src={selectedImage} className="h-16 w-16 object-cover rounded-lg border shadow-sm" alt="Thumbnail" />
                  <button onClick={() => setSelectedImage(null)} className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 shadow-md">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="p-3 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </button>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask for design advice..."
                  className="flex-1 bg-gray-100 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-black text-white p-3 rounded-full hover:scale-105 transition-transform disabled:opacity-50"
                >
                  <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
