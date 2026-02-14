import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight, Upload, User, BookOpen, CreditCard, FileText } from 'lucide-react';

const OnlineAdmission = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Personal Info
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        // Course Info
        course: '',
        batchTime: '',
        // Education
        qualification: '',
        percentage: '',
        // Documents
        photo: null,
        certificate: null,
        idProof: null
    });

    const steps = [
        { number: 1, title: 'Personal Info', icon: User },
        { number: 2, title: 'Course Selection', icon: BookOpen },
        { number: 3, title: 'Education Details', icon: FileText },
        { number: 4, title: 'Upload Documents', icon: Upload },
        { number: 5, title: 'Payment', icon: CreditCard }
    ];

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const nextStep = () => {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Admission form submitted! We will contact you soon.');
        // Here you would send formData to backend
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black text-gray-900 mb-2">Online Admission</h1>
                    <p className="text-gray-600">Complete your enrollment in 5 easy steps</p>
                </div>

                {/* Progress Steps */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.number} className="flex flex-col items-center flex-1 relative">
                                    {/* Line connecting steps */}
                                    {index > 0 && (
                                        <div className={`absolute top-6 right-1/2 w-full h-1 ${currentStep > step.number ? 'bg-primary' : 'bg-gray-200'
                                            }`} style={{ zIndex: 0 }}></div>
                                    )}

                                    {/* Step Circle */}
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 relative z-10 ${currentStep > step.number ? 'bg-primary text-white' :
                                            currentStep === step.number ? 'bg-primary text-white' :
                                                'bg-gray-200 text-gray-500'
                                        }`}>
                                        {currentStep > step.number ? (
                                            <CheckCircle size={24} />
                                        ) : (
                                            <Icon size={20} />
                                        )}
                                    </div>

                                    {/* Step Title */}
                                    <span className="text-xs font-semibold text-gray-700 text-center hidden md:block">
                                        {step.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Step 1: Personal Info */}
                            {currentStep === 1 && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
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
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                                            <input
                                                type="date"
                                                name="dob"
                                                value={formData.dob}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                                required
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Course Selection */}
                            {currentStep === 2 && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Course</h2>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Course *</label>
                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                            required
                                        >
                                            <option value="">Choose a course</option>
                                            <option value="ccc">CCC (Course on Computer Concepts)</option>
                                            <option value="olevel">O-Level (NIELIT)</option>
                                            <option value="dca">DCA (Diploma in Computer Applications)</option>
                                            <option value="pgdca">PGDCA (Post Graduate DCA)</option>
                                            <option value="basic">Basic Computer Course</option>
                                            <option value="tally">Tally with GST</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Batch Time *</label>
                                        <select
                                            name="batchTime"
                                            value={formData.batchTime}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                            required
                                        >
                                            <option value="">Select batch timing</option>
                                            <option value="morning">Morning (8 AM - 10 AM)</option>
                                            <option value="day">Day (11 AM - 1 PM)</option>
                                            <option value="afternoon">Afternoon (2 PM - 4 PM)</option>
                                            <option value="evening">Evening (5 PM - 7 PM)</option>
                                            <option value="weekend">Weekend (Saturday/Sunday)</option>
                                        </select>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                        <p className="text-sm text-blue-900">
                                            <strong>Note:</strong> Final batch allocation will be confirmed based on availability.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Education */}
                            {currentStep === 3 && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Education Details</h2>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification *</label>
                                        <select
                                            name="qualification"
                                            value={formData.qualification}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                            required
                                        >
                                            <option value="">Select qualification</option>
                                            <option value="8th">8th Pass</option>
                                            <option value="10th">10th Pass</option>
                                            <option value="12th">12th Pass</option>
                                            <option value="graduate">Graduate</option>
                                            <option value="postgraduate">Post Graduate</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage/CGPA *</label>
                                        <input
                                            type="text"
                                            name="percentage"
                                            value={formData.percentage}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                            placeholder="e.g., 75% or 7.5 CGPA"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Documents */}
                            {currentStep === 4 && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h2>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Size Photo *</label>
                                        <input
                                            type="file"
                                            name="photo"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Education Certificate *</label>
                                        <input
                                            type="file"
                                            name="certificate"
                                            onChange={handleFileChange}
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">ID Proof (Aadhar/PAN) *</label>
                                        <input
                                            type="file"
                                            name="idProof"
                                            onChange={handleFileChange}
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                            required
                                        />
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                        <p className="text-sm text-yellow-900">
                                            <strong>Requirements:</strong> Files should be less than 2MB. Accepted formats: JPG, PNG, PDF
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Step 5: Payment */}
                            {currentStep === 5 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>

                                    <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 text-white">
                                        <h3 className="text-xl font-bold mb-2">Registration Fee</h3>
                                        <p className="text-3xl font-black">₹500</p>
                                        <p className="text-sm text-blue-100 mt-2">(Adjustable in course fee)</p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-900">Payment Options</h4>

                                        <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-primary transition-colors cursor-pointer">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input type="radio" name="payment" value="online" className="w-4 h-4" />
                                                <div>
                                                    <p className="font-semibold">Pay Online (UPI/Card)</p>
                                                    <p className="text-sm text-gray-600">Instant confirmation</p>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-primary transition-colors cursor-pointer">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input type="radio" name="payment" value="offline" className="w-4 h-4" defaultChecked />
                                                <div>
                                                    <p className="font-semibold">Pay at Center</p>
                                                    <p className="text-sm text-gray-600">Cash/Card accepted during visit</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                        <p className="text-sm text-green-900">
                                            ✓ Form will be submitted and admission confirmed after payment verification
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={`px-6 py-3 rounded-xl font-semibold ${currentStep === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Previous
                        </button>

                        {currentStep < 5 ? (
                            <button
                                onClick={nextStep}
                                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-blue-700 flex items-center gap-2"
                            >
                                Next Step
                                <ChevronRight size={20} />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 flex items-center gap-2"
                            >
                                Submit Application
                                <CheckCircle size={20} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineAdmission;
