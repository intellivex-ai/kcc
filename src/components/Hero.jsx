import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 opacity-10">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#003366" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.1C93.5,11.1,82.2,26.4,71.3,38.9C60.4,51.4,49.9,61.1,37.8,68.6C25.7,76.1,12,81.4,-0.9,82.9C-13.8,84.4,-26.4,82.1,-38.1,75.4C-49.8,68.7,-60.6,57.6,-69.7,44.9C-78.8,32.2,-86.2,17.9,-85.4,3.9C-84.6,-10.1,-75.6,-23.8,-65.4,-35.3C-55.2,-46.8,-43.8,-56.1,-31.4,-64.3C-19,-72.5,-5.6,-79.6,9.1,-81.1C23.8,-82.6,47.6,-78.5,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
                            <span className="text-primary font-semibold text-sm tracking-wide">TRUSTED BY 1000+ STUDENTS & CITIZENS</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Empowering Rajatalab with <span className="text-primary relative inline-block">
                                Digital Excellence
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Your one-stop destination for Aadhar Banking, Government Services, and Government Certified Computer Education (CCC/O-Level).
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/education" className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-light transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                Start Learning <Rocket size={20} />
                            </Link>
                            <Link to="/services" className="flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:bg-blue-50 transition-all">
                                View Services <ShieldCheck size={20} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Visual (3D Card) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative w-full max-w-md lg:max-w-full"
                    >
                        <div className="relative w-full aspect-[4/3] perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-3xl transform rotate-3 opacity-20 blur-2xl animate-pulse"></div>

                            {/* The "Card" */}
                            <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6 lg:p-8 flex flex-col justify-between transform hover:rotate-1 hover:scale-[1.02] transition-all duration-500 animate-float">
                                {/* Decoration */}
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png" alt="Digital India" className="w-32 grayscale" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl">🎓</div>
                                        <div>
                                            <h3 className="font-bold text-gray-800">Certificate of Completion</h3>
                                            <p className="text-xs text-gray-500">Ministry of Electronics & IT</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                                        <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                                        <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-500`}>User</div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-xs font-bold text-primary">+1k</div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 font-medium">Verified Centre</p>
                                        <div className="text-accent font-bold text-sm flex items-center gap-1">
                                            ● CSC Approved
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
