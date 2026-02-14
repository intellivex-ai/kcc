import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
            {/* Modern Gradient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[400px] lg:w-[700px] h-[400px] lg:h-[700px] rounded-full bg-blue-100/50 blur-3xl opacity-60 animate-pulse-slow"></div>
                <div className="absolute top-[40%] -left-[10%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-purple-100/40 blur-3xl opacity-50 animate-pulse-slow delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/60 border border-blue-100 backdrop-blur-md shadow-sm">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-primary font-bold text-[10px] sm:text-xs tracking-wider uppercase">Open Now • Serving Rajatalab</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
                            Digital Seva <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                made simple.
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Your trusted destination for Aadhaar Banking, Government Services, and certified Computer Education.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/education" className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <span className="relative flex items-center gap-2">Start Learning <Rocket size={20} /></span>
                            </Link>
                            <Link to="/services" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md flex items-center gap-2 justify-center">
                                View Services <ShieldCheck size={20} />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200/60 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-gray-900">2k+</h4>
                                <p className="text-sm text-gray-500 font-medium">Happy Citizens</p>
                            </div>
                            <div className="w-px h-10 bg-gray-200"></div>
                            <div>
                                <h4 className="text-3xl font-bold text-gray-900">500+</h4>
                                <p className="text-sm text-gray-500 font-medium">Students Certified</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual (Glassmorphism Card) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative w-full max-w-md lg:max-w-full"
                    >
                        <div className="relative w-full aspect-[4/3] perspective-1000">
                            {/* Floating decorative elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-3xl rotate-12 blur-sm opacity-20 z-0"
                            ></motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                                className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary rounded-full blur-2xl opacity-10 z-0"
                            ></motion.div>

                            {/* The "Card" */}
                            <div className="relative z-10 h-full bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 flex flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500"></div>

                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-3xl shadow-lg shadow-primary/30 text-white">
                                        🏛️
                                    </div>
                                    <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                                        VERIFIED
                                    </div>
                                </div>

                                <div className="space-y-6 mt-4">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-gray-900">Kusum Computer Centre</h3>
                                        <p className="text-gray-500 font-medium">Rajatalab's Premium Digital Hub</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 mb-2"></div>
                                            <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                            <div className="w-2 h-2 rounded-full bg-purple-500 mb-2"></div>
                                            <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100/50 flex items-center justify-between">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className={`w-10 h-10 rounded-full border-[3px] border-white bg-gray-100 shadow-sm flex items-center justify-center text-xs overflow-hidden`}>
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="User" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Rating</p>
                                        <div className="text-yellow-500 font-bold text-lg flex items-center gap-1">
                                            4.9 <span className="text-xs text-gray-400">/ 5.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
