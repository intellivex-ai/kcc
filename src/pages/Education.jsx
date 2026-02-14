import React from 'react';
import EducationPortal from '../components/EducationPortal';
import { BookOpen, Check } from 'lucide-react';

const Education = () => {
    return (
        <div className="pt-20">
            <div className="bg-primary text-white py-16 text-center relative overflow-hidden">
                <h1 className="text-4xl font-bold mb-4 relative z-10">Education & Training</h1>
                <p className="text-blue-100 max-w-2xl mx-auto relative z-10">
                    Empower yourself with digital skills. Join our CCC course today.
                </p>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10 flex justify-center items-center">
                    <BookOpen size={300} />
                </div>
            </div>

            <EducationPortal />

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Why Choose Kusum Computer Centre?</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Experienced Faculty with 10+ years of experience.",
                            "Air-conditioned labs with modern computers.",
                            "Flexible batch timings for students & professionals.",
                            "Regular mock tests for CCC exam preparation.",
                            "Personalized attention and doubt clearing sessions.",
                            "Free study material and notes."
                        ].map((reason, i) => (
                            <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="bg-green-100 p-2 rounded-full shrink-0">
                                    <Check className="text-green-600" size={20} />
                                </div>
                                <p className="text-gray-700 font-medium">{reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
