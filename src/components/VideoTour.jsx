import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

const VideoTour = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Placeholder - replace with actual YouTube video ID
    const videoId = "dQw4w9WgXcQ"; // Replace with actual KCC video

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Virtual Tour</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
                        See Our Center in Action
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Take a virtual tour of our state-of-the-art computer lab and training facilities
                    </p>
                </div>

                {/* Video Container */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                        {!isPlaying ? (
                            // Thumbnail with play button
                            <div className="relative w-full h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=675&fit=crop"
                                    alt="Computer Lab"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                {/* Play Button */}
                                <motion.button
                                    onClick={() => setIsPlaying(true)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group"
                                >
                                    <Play size={32} className="text-primary ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                                </motion.button>

                                {/* Labels */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-white text-xl sm:text-2xl font-black mb-2">
                                        Welcome to Kusum Computer Centre
                                    </h3>
                                    <p className="text-white/90 text-sm sm:text-base">
                                        Explore our modern facilities and learn why 2000+ students trust us
                                    </p>
                                </div>
                            </div>
                        ) : (
                            // YouTube embed
                            <div className="relative w-full h-full">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title="Kusum Computer Centre Tour"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0"
                                ></iframe>
                                <button
                                    onClick={() => setIsPlaying(false)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Video features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {[
                            'Modern Computer Lab',
                            'Expert Instructors',
                            'Hands-on Training',
                            'Latest Technology'
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-4 bg-gray-50 rounded-xl"
                            >
                                <p className="text-sm font-semibold text-gray-700">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTour;
