import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Search } from 'lucide-react';

const EducationPortal = () => {
    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Decor Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Course Details */}
                    <div className="flex-1 space-y-6 lg:space-y-8">
                        <div>
                            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold tracking-wider uppercase mb-3 lg:mb-4">
                                Career Booster
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                Master Computer Concepts <span className="text-primary">(CCC)</span>
                            </h2>
                            <p className="text-gray-600 mt-4 lg:mt-6 text-base sm:text-lg leading-relaxed">
                                Join our government-recognized CCC course. Essential for state government jobs like UP Police, Lekhpal, and more.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "3 Months Duration (80 Hours)",
                                "NIELIT (Govt of India) Certified",
                                "Practical Labs & Live Projects",
                                "Expert Faculty Support"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                    <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                                        <CheckCircle size={16} />
                                    </div>
                                    <span className="font-semibold text-gray-700 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 flex flex-wrap gap-4">
                            <button className="bg-primary hover:bg-primary-light text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95">
                                Download Syllabus
                            </button>
                            <button className="border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5 px-8 py-3.5 rounded-xl font-bold transition-all">
                                View Fee Structure
                            </button>
                        </div>
                    </div>

                    {/* Student Verification Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-md"
                    >
                        <div className="relative bg-white/40 backdrop-blur-xl rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 p-8 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 z-0"></div>

                            <div className="relative z-10">
                                <div className="mb-8 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-tr from-secondary to-yellow-300 rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-lg mb-4">
                                        📜
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Student Verification</h3>
                                    <p className="text-gray-500 text-sm mt-1">Verify your certificate status instantly.</p>
                                </div>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Registration Number</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. KCC2023001"
                                            className="w-full px-5 py-3.5 rounded-xl bg-white/70 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>

                                    <button className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group">
                                        <Search size={20} className="group-hover:scale-110 transition-transform" /> Verify Now
                                    </button>
                                </form>

                                <div className="mt-8 pt-6 border-t border-gray-200/50">
                                    <div className="flex items-center gap-4 bg-green-50/50 p-4 rounded-xl border border-green-100">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            <CheckCircle size={16} />
                                        </div>
                                        <p className="text-xs text-green-800 leading-relaxed">
                                            <strong>100% Valid.</strong> All certificates are digitally signed and verifiable online for employer verification.
                                        </p>
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

export default EducationPortal;
