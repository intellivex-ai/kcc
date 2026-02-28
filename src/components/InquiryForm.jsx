import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, BookOpen, MessageSquare, CheckCircle } from 'lucide-react';
import { addInquiry } from '../lib/admin-data';

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const courses = [
        'CCC Course',
        'O-Level',
        'Basic Computer',
        'DCA',
        'PGDCA',
        'Tally with GST',
        'Other / Not Sure'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Save to Supabase
            await addInquiry({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.course,
                message: formData.message || 'No message provided'
            });

            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: '', email: '', phone: '', course: '', message: '' });
            }, 3000);
        } catch (err) {
            console.error('Failed to submit inquiry:', err);
            setError('Failed to submit inquiry. Please try again.');
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center"
            >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">We received your inquiry. Our team will contact you within 24 hours.</p>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100"
        >
            <h3 className="text-2xl font-black text-gray-900 mb-6">Quick Inquiry</h3>

            {/* Error Message */}
            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    {error}
                </div>
            )}

            {/* Name */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    />
                </div>
            </div>

            {/* Phone */}
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    />
                </div>
            </div>

            {/* Course */}
            <div className="mb-4">
                <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">Interested Course *</label>
                <div className="relative">
                    <BookOpen size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none bg-white"
                    >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                            <option key={index} value={course}>{course}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Message */}
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any specific questions?"
                        rows="3"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                    ></textarea>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                        Sending...
                    </>
                ) : (
                    <>
                        <Send size={20} />
                        Send Inquiry
                    </>
                )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
                We'll respond within 24 hours • Your data is secure
            </p>
        </motion.form>
    );
};

export default InquiryForm;
