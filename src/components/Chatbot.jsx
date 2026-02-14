import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, ExternalLink } from 'lucide-react';
import { getBotResponse } from '../lib/chatbot-logic';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Namaste! 🙏 I am your digital assistant. Ask me about courses or services!", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    const suggestQuestions = [
        "What is CCC Course fees?",
        "Do you do Money Transfer?",
        "O-Level Details?",
        "Passport Apply?",
        "Railway Ticket Booking?"
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simulate thinking delay
        setTimeout(() => {
            const botReplyText = getBotResponse(input);
            const botMsg = { id: Date.now() + 1, text: botReplyText, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    const handleWhatsAppRedirect = () => {
        const message = "Hello Naveen Sir, I have a query regarding Kusum Computer Centre services.";
        window.open(`https://wa.me/919795633704?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-light text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 text-white flex justify-between items-center shrink-0 shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base">KCC Support</h3>
                                    <p className="text-xs text-blue-100 flex items-center gap-1.5 opacity-90">
                                        <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse shadow-[0_0_5px_rgba(74,222,128,0.6)]"></span> Online
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.sender === 'user' ? 'bg-secondary text-primary' : 'bg-primary text-white'}`}>
                                        {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                                    </div>
                                    <div
                                        className={`max-w-[80%] p-3 text-sm rounded-xl shadow-sm ${msg.sender === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 mt-4 ml-2 animate-fade-in-up">
                                    {suggestQuestions.map((q, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                const userMsg = { id: Date.now(), text: q, sender: 'user' };
                                                setMessages(prev => [...prev, userMsg]);
                                                setTimeout(() => {
                                                    const botReplyText = getBotResponse(q);
                                                    const botMsg = { id: Date.now() + 1, text: botReplyText, sender: 'bot' };
                                                    setMessages(prev => [...prev, botMsg]);
                                                }, 600);
                                            }}
                                            className="text-xs bg-white border border-primary/20 text-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="bg-blue-50/80 p-2 text-center border-t border-blue-100 backdrop-blur-sm">
                            <button onClick={handleWhatsAppRedirect} className="text-xs font-bold text-primary flex items-center justify-center gap-1 hover:underline transition-all">
                                Need human help? Chat on WhatsApp <ExternalLink size={10} />
                            </button>
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2 shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your query..."
                                className="flex-1 bg-gray-100 text-gray-900 placeholder:text-gray-500 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="bg-primary hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all shadow-md active:scale-95 flex items-center justify-center w-10 h-10"
                            >
                                <Send size={18} className={input.trim() ? "ml-0.5" : ""} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
