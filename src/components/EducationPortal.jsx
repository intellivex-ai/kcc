import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Search } from 'lucide-react';

const EducationPortal = () => {
    return (
        <section className="py-20 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Course Details */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Empower Your Career</span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-2">Master Computer Concepts (CCC)</h2>
                            <p className="text-gray-600 mt-4 text-lg">
                                Join our government-recognized CCC course. Essential for state government jobs like UP Police, Lekhpal, and more.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "3 Months Duration (80 Hours)",
                                "NIELIT (Govt of India) Certified",
                                "Practical Labs & Live Projects",
                                "Expert Faculty Support"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-accent shrink-0" size={20} />
                                    <span className="font-medium text-gray-800">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 flex gap-4">
                            <button className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-transform hover:-translate-y-1">
                                Download Syllabus
                            </button>
                            <button className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition-colors">
                                View Fee Structure
                            </button>
                        </div>
                    </div>

                    {/* Student Verification Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-8"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Student Verification</h3>
                            <p className="text-gray-500 text-sm">Verify your certificate status instantly.</p>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                                <input
                                    type="text"
                                    placeholder="e.g. KCC2023001"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <button className="w-full bg-secondary hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2">
                                <Search size={20} /> Verify Now
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-accent">
                                    <CheckCircle size={20} />
                                </div>
                                <p className="text-xs text-gray-500">
                                    <strong>100% Valid.</strong> All certificates are verifiable online for employer verification.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EducationPortal;
