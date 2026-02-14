import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, CheckCircle, Shield, IndianRupee } from 'lucide-react';

const PaymentGateway = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        // Simulate payment processing
        setTimeout(() => {
            setPaymentSuccess(true);
        }, 1500);
    };

    if (paymentSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md mx-auto px-4"
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={48} className="text-green-600" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Payment Successful!</h2>
                        <p className="text-gray-600 mb-6">
                            Your payment has been processed successfully. A confirmation has been sent to your email.
                        </p>
                        <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
                            <h3 className="font-bold text-gray-900 mb-3">Transaction Details:</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>Transaction ID:</span>
                                    <span className="font-mono font-bold">TXN20240214001</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Amount Paid:</span>
                                    <span className="font-bold text-green-600">₹3,500</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Status:</span>
                                    <span className="text-green-600 font-bold">Success</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Course:</span>
                                    <span className="font-bold">CCC (3 Months)</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="w-full px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                            >
                                Back to Home
                            </button>
                            <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                                Download Receipt
                            </button>
                        </div>
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
                    <h1 className="text-4xl font-black text-gray-900 mb-2">Secure Payment</h1>
                    <p className="text-gray-600">Complete your enrollment by making payment</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <h2 className="text-xl font-black text-gray-900 mb-4">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Course</span>
                                    <span className="font-semibold">CCC</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Duration</span>
                                    <span className="font-semibold">3 Months</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Course Fee</span>
                                    <span className="font-semibold">₹3,000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Registration</span>
                                    <span className="font-semibold">₹500</span>
                                </div>
                                <div className="border-t pt-4 flex justify-between">
                                    <span className="font-bold text-gray-900">Total Amount</span>
                                    <span className="font-black text-2xl text-primary">₹3,500</span>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                                <p className="text-sm text-green-900">
                                    <strong>✓ Money Back Guarantee</strong><br />
                                    100% refund if not satisfied
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <Shield size={16} className="text-green-600" />
                                <span>Secured by 256-bit SSL encryption</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Payment Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            {/* Payment Method Tabs */}
                            <div className="flex gap-4 mb-8">
                                <button
                                    onClick={() => setPaymentMethod('card')}
                                    className={`flex-1 px-6 py-3 rounded-xl font-bold transition-all ${paymentMethod === 'card'
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    💳 Card
                                </button>
                                <button
                                    onClick={() => setPaymentMethod('upi')}
                                    className={`flex-1 px-6 py-3 rounded-xl font-bold transition-all ${paymentMethod === 'upi'
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    📱 UPI
                                </button>
                                <button
                                    onClick={() => setPaymentMethod('netbanking')}
                                    className={`flex-1 px-6 py-3 rounded-xl font-bold transition-all ${paymentMethod === 'netbanking'
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    🏦 Net Banking
                                </button>
                            </div>

                            <form onSubmit={handlePayment}>
                                {/* Card Payment */}
                                {paymentMethod === 'card' && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                                            <div className="relative">
                                                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="text"
                                                    placeholder="1234 5678 9012 3456"
                                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                                    maxLength="19"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name</label>
                                            <input
                                                type="text"
                                                placeholder="Name on card"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                                    maxLength="5"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                    <input
                                                        type="password"
                                                        placeholder="123"
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                                        maxLength="3"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* UPI Payment */}
                                {paymentMethod === 'upi' && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">UPI ID</label>
                                            <input
                                                type="text"
                                                placeholder="yourname@upi"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>

                                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                                            <p className="text-sm text-gray-700 mb-3">Or scan QR code</p>
                                            <div className="w-48 h-48 bg-white rounded-xl mx-auto flex items-center justify-center border-2 border-gray-200">
                                                <p className="text-gray-400 text-sm">QR Code Here</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Net Banking */}
                                {paymentMethod === 'netbanking' && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Your Bank</label>
                                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary" required>
                                                <option value="">Choose bank</option>
                                                <option value="sbi">State Bank of India</option>
                                                <option value="hdfc">HDFC Bank</option>
                                                <option value="icici">ICICI Bank</option>
                                                <option value="axis">Axis Bank</option>
                                                <option value="pnb">Punjab National Bank</option>
                                                <option value="boi">Bank of India</option>
                                            </select>
                                        </div>

                                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                            <p className="text-sm text-yellow-900">
                                                <strong>Note:</strong> You will be redirected to your bank's website for authentication
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full mt-8 px-6 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Lock size={20} />
                                    Pay ₹3,500 Securely
                                </button>

                                {/* Trust Badges */}
                                <div className="mt-6 flex items-center justify-center gap-6 text-gray-500 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Shield size={16} />
                                        <span>SSL Secured</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle size={16} />
                                        <span>PCI Compliant</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Info Banner */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
                    <p className="text-gray-700">
                        <strong>This is a demo payment gateway.</strong> No real transactions will be processed. Any card details you enter are not saved or transmitted.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateway;
