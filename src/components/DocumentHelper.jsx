import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronDown, CheckSquare, Sparkles } from 'lucide-react';

const DOCUMENTS = {
    "Select Service": { required: [] },
    "PAN Card (New)": {
        required: ["Aadhar Card", "2 Passport Size Photos", "Mobile Number linked with Aadhar"],
        notes: "Processing time: 7-10 days"
    },
    "Voter ID (New)": {
        required: ["Aadhar Card", "Passport Photo", "Age Proof (10th Marksheet/Birth Cert)"],
        notes: "Apply 6 months before elections"
    },
    "Income Certificate": {
        required: ["Aadhar Card", "Self Declaration Form", "Gram Pradhan Verification"],
        notes: "Valid for 3 years"
    },
    "Caste Certificate": {
        required: ["Aadhar Card", "Old Family Caste Certificate", "Self Declaration"],
        notes: "Valid for lifetime (in most cases)"
    },
    "CCC Course Admission": {
        required: ["High School (10th) Marksheet", "Aadhar Card", "Photo", "Signature"],
        notes: "Exams are held every month"
    }
};

const DocumentHelper = () => {
    const [selectedService, setSelectedService] = useState("Select Service");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background Noise/Texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-secondary text-sm font-medium mb-6 border border-white/20">
                    <Sparkles size={16} /> AI Document Assistant
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What documents do I need?</h2>
                <p className="text-blue-100 text-lg mb-10">Select a service below to generate an instant checklist.</p>

                <div className="relative max-w-xl mx-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full bg-white text-left px-6 py-4 rounded-xl shadow-xl flex items-center justify-between font-semibold text-gray-800 text-lg hover:bg-gray-50 transition-colors"
                    >
                        {selectedService}
                        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-20 max-h-60 overflow-y-auto"
                            >
                                {Object.keys(DOCUMENTS).filter(k => k !== "Select Service").map((service) => (
                                    <button
                                        key={service}
                                        onClick={() => {
                                            setSelectedService(service);
                                            setIsOpen(false);
                                        }}
                                        className="w-full text-left px-6 py-3 hover:bg-blue-50 text-gray-700 transition-colors border-b border-gray-100 last:border-0"
                                    >
                                        {service}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Results Card */}
                <AnimatePresence mode="wait">
                    {selectedService !== "Select Service" && (
                        <motion.div
                            key={selectedService}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-left max-w-xl mx-auto"
                        >
                            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                                <FileText className="text-secondary" /> Required Documents:
                            </h3>

                            <ul className="space-y-4">
                                {DOCUMENTS[selectedService].required.map((doc, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white/90 bg-black/20 px-4 py-3 rounded-lg border border-white/5">
                                        <CheckSquare className="text-accent shrink-0" size={18} />
                                        <span>{doc}</span>
                                    </li>
                                ))}
                            </ul>

                            {DOCUMENTS[selectedService].notes && (
                                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                                    <p className="text-blue-200 text-sm">💡 Note: {DOCUMENTS[selectedService].notes}</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default DocumentHelper;
