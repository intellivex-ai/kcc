import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary to-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Get In Touch</h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Have questions? We are here to help! Reach out via form, phone, or visit our center.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 mb-6">Contact Information</h2>
                                <p className="text-gray-600 mb-8">
                                    Kusum Computer Centre - Your trusted partner for computer education and government services.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                        <a href="tel:9795633704" className="text-gray-600 hover:text-primary">+91 9795633704</a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md"
                                >
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                                        <MessageSquare size={24} className="text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                                        <a
                                            href="https://wa.me/919795633704"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-green-600"
                                        >
                                            Chat with us
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md"
                                >
                                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={24} className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-600">Rajatalab, Varanasi, Uttar Pradesh</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md"
                                >
                                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Clock size={24} className="text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
                                        <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-500 text-sm">Sunday: Closed</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <div>
                            <InquiryForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Find Us</h2>
                    <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14419.123456789!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febf4c3%3A0x6e5e8e4e0e4e8e!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="KCC Location Map"
                        ></iframe>
                    </div>
                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-700">
                            <strong>Note:</strong> The map shows Varanasi city center. Please update the embed code with your exact institute address for precise location.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
