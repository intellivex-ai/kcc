import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, IndianRupee } from 'lucide-react';

const FeeCalculator = () => {
    const [selectedCourse, setSelectedCourse] = useState('ccc');
    const [paymentMode, setPaymentMode] = useState('full');

    const courses = {
        ccc: { name: 'CCC Course', fee: 3500, duration: '3 Months' },
        olevel: { name: 'O-Level', fee: 12000, duration: '12 Months' },
        basic: { name: 'Basic Computer', fee: 2000, duration: '2 Months' },
        dca: { name: 'DCA', fee: 8000, duration: '6 Months' },
        pgdca: { name: 'PGDCA', fee: 15000, duration: '12 Months' },
        tally: { name: 'Tally with GST', fee: 5000, duration: '3 Months' }
    };

    const calculateTotal = () => {
        const baseFee = courses[selectedCourse].fee;
        if (paymentMode === 'installment') {
            return baseFee * 1.1; // 10% extra for installments
        }
        return baseFee;
    };

    const getInstallmentAmount = () => {
        return (calculateTotal() / 3).toFixed(0);
    };

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Pricing</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Fee Calculator</h2>
                    <p className="text-gray-600 text-base sm:text-lg">Calculate your course fees instantly</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100">
                    {/* Course Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-bold text-gray-700 mb-3">Select Course</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {Object.entries(courses).map(([key, course]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedCourse(key)}
                                    className={`p-4 rounded-xl border-2 transition-all text-left ${selectedCourse === key
                                            ? 'border-primary bg-blue-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-1">
                                        <h3 className="font-bold text-gray-900 text-sm">{course.name}</h3>
                                        {selectedCourse === key && (
                                            <Check size={16} className="text-primary shrink-0" />
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-500">{course.duration}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Payment Mode */}
                    <div className="mb-8">
                        <label className="block text-sm font-bold text-gray-700 mb-3">Payment Mode</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setPaymentMode('full')}
                                className={`p-4 rounded-xl border-2 transition-all ${paymentMode === 'full'
                                        ? 'border-primary bg-blue-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-bold text-gray-900">Full Payment</h3>
                                    {paymentMode === 'full' && <Check size={16} className="text-primary" />}
                                </div>
                                <p className="text-xs text-gray-500">Pay once, save 10%</p>
                            </button>
                            <button
                                onClick={() => setPaymentMode('installment')}
                                className={`p-4 rounded-xl border-2 transition-all ${paymentMode === 'installment'
                                        ? 'border-primary bg-blue-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-bold text-gray-900">3 Installments</h3>
                                    {paymentMode === 'installment' && <Check size={16} className="text-primary" />}
                                </div>
                                <p className="text-xs text-gray-500">Flexible payments</p>
                            </button>
                        </div>
                    </div>

                    {/* Result */}
                    <motion.div
                        key={`${selectedCourse}-${paymentMode}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Calculator size={24} />
                            <h3 className="text-lg font-bold">Your Investment</h3>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-blue-100">Course Fee</span>
                                <span className="font-semibold flex items-center">
                                    <IndianRupee size={16} />
                                    {courses[selectedCourse].fee}
                                </span>
                            </div>

                            {paymentMode === 'installment' && (
                                <>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-blue-100">Installment Charge (10%)</span>
                                        <span className="flex items-center">
                                            <IndianRupee size={14} />
                                            {(courses[selectedCourse].fee * 0.1).toFixed(0)}
                                        </span>
                                    </div>
                                    <div className="border-t border-white/20 pt-3">
                                        <div className="flex justify-between items-center text-sm mb-2">
                                            <span className="text-blue-100">Per Installment (3x)</span>
                                            <span className="font-bold flex items-center">
                                                <IndianRupee size={14} />
                                                {getInstallmentAmount()}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="border-t border-white/20 pt-3 mt-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold">Total Amount</span>
                                    <span className="text-2xl font-black flex items-center">
                                        <IndianRupee size={20} />
                                        {calculateTotal().toFixed(0)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <a
                            href="/contact"
                            className="mt-6 w-full bg-white text-primary py-3 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center"
                        >
                            Enroll in {courses[selectedCourse].name}
                        </a>
                    </motion.div>

                    <p className="text-center text-gray-500 text-xs mt-4">
                        * Fees are subject to change. Contact us for latest pricing.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeeCalculator;
