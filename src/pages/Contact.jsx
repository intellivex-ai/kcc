import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
    return (
        <div className=\"min-h-screen bg-gray-50\">
    {/* Header */ }
    <section className=\"bg-gradient-to-br from-primary to-blue-600 py-20\">
        < div className =\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center\">
            < h1 className =\"text-4xl md:text-5xl font-black text-white mb-4\">Get In Touch</h1>
                < p className =\"text-blue-100 text-lg max-w-2xl mx-auto\">
                        Have questions ? We're here to help! Reach out via form, phone, or visit our center.
                    </p >
                </div >
            </section >

    {/* Contact Section */ }
    < section className =\"py-16\">
        < div className =\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
            < div className =\"grid grid-cols-1 lg:grid-cols-2 gap-12\">
{/* Contact Info */ }
<div className=\"space-y-8\">
    < div >
    <h2 className=\"text-3xl font-black text-gray-900 mb-6\">Contact Information</h2>
        < p className =\"text-gray-600 mb-8\">
                                    Kusum Computer Centre - Your trusted partner for computer education and government services.
                                </p >
                            </div >

    {/* Contact Cards */ }
    < div className =\"space-y-4\">
        < motion.div
initial = {{ opacity: 0, x: -20 }}
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true }}
className =\"flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md\"
    >
    <div className=\"w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0\">
        < Phone size = { 24} className =\"text-primary\" />
                                    </div >
                                    <div>
                                        <h3 className=\"font-bold text-gray-900 mb-1\">Phone</h3>
                                        <a href=\"tel:9795633704\" className=\"text-gray-600 hover:text-primary\">+91 9795633704</a>
                                    </div >
                                </motion.div >

    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className=\"flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md\"
            >
            <div className=\"w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0\">
                < MessageSquare size = { 24} className =\"text-green-600\" />
                                    </div >
                                    <div>
                                        <h3 className=\"font-bold text-gray-900 mb-1\">WhatsApp</h3>
                                        <a 
                                            href=\"https://wa.me/919795633704\" 
target =\"_blank\" 
rel =\"noopener noreferrer\"
className =\"text-gray-600 hover:text-green-600\"
    >
    Chat with us
                                        </a >
                                    </div >
                                </motion.div >

    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className=\"flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md\"
            >
            <div className=\"w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0\">
                < MapPin size = { 24} className =\"text-purple-600\" />
                                    </div >
                                    <div>
                                        <h3 className=\"font-bold text-gray-900 mb-1\">Address</h3>
                                        <p className=\"text-gray-600\">Rajatalab, Varanasi, Uttar Pradesh</p>
                                    </div >
                                </motion.div >

    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className=\"flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md\"
            >
            <div className=\"w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0\">
                < Clock size = { 24} className =\"text-orange-600\" />
                                    </div >
                                    <div>
                                        <h3 className=\"font-bold text-gray-900 mb-1\">Working Hours</h3>
                                        <p className=\"text-gray-600\">Mon - Sat: 9:00 AM - 6:00 PM</p>
    < p className =\"text-gray-500 text-sm\">Sunday: Closed</p>
                                    </div >
                                </motion.div >
                            </div >
                        </div >

    {/* Inquiry Form */ }
    < div >
    <InquiryForm />
                        </div >
                    </div >
                </div >
            </section >

    {/* Map Section (Placeholder) */ }
    < section className =\"py-16 bg-white\">
        < div className =\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
            < h2 className =\"text-3xl font-black text-gray-900 mb-8 text-center\">Find Us</h2>
                < div className =\"bg-gray-200 rounded-2xl h-96 flex items-center justify-center\">
                    < p className =\"text-gray-500\">Google Maps Integration Coming Soon</p>
                    </div >
                </div >
            </section >
        </div >
    );
};

export default Contact;
