import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is CCC Course and who should take it?",
            answer: "CCC (Course on Computer Concepts) is a NIELIT certified course essential for government jobs in UP like Police, Lekhpal, etc. It covers basic computer concepts, internet, and MS Office. Duration: 3 months (80 hours)."
        },
        {
            question: "What are the fees for computer courses?",
            answer: "CCC: ₹3500, O-Level: ₹8500, Basic Computer: ₹2500, DCA: ₹6000. We offer flexible payment options and installment facility. Contact for current discounts."
        },
        {
            question: "How to verify my certificate?",
            answer: "Enter your registration number in the Student Verification widget on our Education page. For NIELIT certificates, visit the official NIELIT website or contact our office."
        },
        {
            question: "Do you provide job assistance?",
            answer: "Yes! We guide students with resume building, interview preparation, and share job opportunities. Many of our students are placed in banks, government offices, and private companies."
        },
        {
            question: "What services do you offer apart from education?",
            answer: "We provide Aadhaar services, PAN card, passport application, railway ticket booking, money transfer (DMT), electricity bill payment, mobile recharge, and all government form filling services."
        },
        {
            question: "Are you authorized by government?",
            answer: "Yes, we are an authorized CSC (Common Service Center) and NIELIT study center. All our certificates are government-recognized and valid nationwide."
        },
        {
            question: "Do you have weekend batches?",
            answer: "Yes, we offer flexible timing including weekend and evening batches for working professionals. Contact us to know the current batch schedule."
        },
        {
            question: "How can I contact for admission?",
            answer: "Visit our center at Rajatalab, call 9795633704, or use the chatbot/inquiry form on this website. You can also WhatsApp us for quick response."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Have Questions?</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">Find quick answers to common questions</p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-colors"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                            >
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                        <HelpCircle size={20} className="text-primary" />
                                    </div>
                                    <span className="font-bold text-gray-900 text-base sm:text-lg pr-4">
                                        {faq.question}
                                    </span>
                                </div>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="shrink-0"
                                >
                                    <ChevronDown size={24} className="text-primary" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 lg:px-6 pb-5 lg:pb-6 pl-[4.5rem]">
                                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center bg-gradient-to-br from-primary/5 to-purple-50 rounded-2xl p-8">
                    <p className="text-gray-700 mb-4 text-lg font-semibold">Still have questions?</p>
                    <p className="text-gray-600 mb-6">Our team is here to help! Reach out via chat or WhatsApp.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://wa.me/919795633704"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all"
                        >
                            WhatsApp Us
                        </a>
                        <a
                            href="/contact"
                            className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-xl font-bold transition-all"
                        >
                            Contact Page
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
