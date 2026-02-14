import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, BookOpen, CheckCircle } from 'lucide-react';

const OnlineBooking = () => {
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const services = [
        { value: 'ccc-registration', label: 'CCC Exam Registration' },
        { value: 'olevel-registration', label: 'O-Level Exam Registration' },
        { value: 'document-service', label: 'Government Document Service' },
        { value: 'course-counseling', label: 'Course Counseling Session' },
        { value: 'admission', label: 'Course Admission Inquiry' },
        { value: 'certificate-collection', label: 'Certificate Collection' }
    ];

    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
    ];

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send booking data to backend
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md mx-auto px-4"
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle size={40} className="text-green-600" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Booking Confirmed!</h2>
                        <p className="text-gray-600 mb-6">
                            Your appointment has been booked successfully. We'll send you a confirmation SMS and email shortly.
                        </p>
                        <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
                            <h3 className="font-bold text-gray-900 mb-3">Booking Details:</h3>
                            <p className="text-sm text-gray-700 mb-1">
                                <strong>Service:</strong> {services.find(s => s.value === selectedService)?.label}
                            </p>
                            <p className="text-sm text-gray-700 mb-1">
                                <strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                            <p className="text-sm text-gray-700 mb-1">
                                <strong>Time:</strong> {selectedTime}
                            </p>
                            <p className="text-sm text-gray-700">
                                <strong>Name:</strong> {formData.name}
                            </p>
                        </div>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="w-full px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                        >
                            Back to Home
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black text-gray-900 mb-2">Book an Appointment</h1>
                    <p className="text-gray-600">Schedule your visit to KCC - No waiting in line!</p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Service Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <BookOpen size={18} className="text-primary" />
                                Select Service *
                            </label>
                            <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                required
                            >
                                <option value="">Choose a service</option>
                                {services.map(service => (
                                    <option key={service.value} value={service.value}>{service.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Date & Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <Calendar size={18} className="text-primary" />
                                    Select Date *
                                </label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <Clock size={18} className="text-primary" />
                                    Select Time *
                                </label>
                                <select
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                    required
                                >
                                    <option value="">Choose time slot</option>
                                    {timeSlots.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <User size={18} className="text-primary" />
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <Phone size={18} className="text-primary" />
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder="10-digit mobile number"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <Mail size={18} className="text-primary" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder="your@email.com (optional)"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Additional Message (Optional)
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="3"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="Any specific requirements or questions..."
                            ></textarea>
                        </div>

                        {/* Info Note */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <p className="text-sm text-blue-900">
                                <strong>Note:</strong> You will receive a confirmation SMS and email. Please arrive 5 minutes before your scheduled time.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors"
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>

                {/* Benefits */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                        <div className="text-4xl mb-2">⏰</div>
                        <h3 className="font-bold text-gray-900">No Waiting</h3>
                        <p className="text-sm text-gray-600">Skip the queue</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                        <div className="text-4xl mb-2">✅</div>
                        <h3 className="font-bold text-gray-900">Guaranteed Slot</h3>
                        <p className="text-sm text-gray-600">Your time is reserved</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                        <div className="text-4xl mb-2">📱</div>
                        <h3 className="font-bold text-gray-900">SMS Reminder</h3>
                        <p className="text-sm text-gray-600">Never miss it</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineBooking;
