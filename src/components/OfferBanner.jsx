import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Sparkles } from 'lucide-react';

const OfferBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 px-4 relative overflow-hidden"
            >
                {/* Animated background */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

                <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm animate-pulse">
                            <Gift size={20} />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-black text-sm sm:text-base flex items-center gap-1">
                                <Sparkles size={16} className="animate-spin" />
                                Limited Time Offer!
                            </span>
                            <span className="text-xs sm:text-sm font-medium">
                                Get 20% OFF on CCC Course + FREE Study Material • Enroll Before March 31st
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 ml-4">
                        <a
                            href="/education"
                            className="bg-white text-red-600 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-all whitespace-nowrap"
                        >
                            Enroll Now
                        </a>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-white/80 hover:text-white transition-colors"
                            aria-label="Close banner"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default OfferBanner;
