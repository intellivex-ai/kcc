import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Building2, CheckCircle2 } from 'lucide-react';

const PartnerLogos = () => {
    const partners = [
        {
            id: 1,
            name: "NIELIT",
            description: "Authorized Study Center",
            icon: Building2,
            color: "blue"
        },
        {
            id: 2,
            name: "CSC",
            description: "Common Service Center",
            icon: Shield,
            color: "green"
        },
        {
            id: 3,
            name: "DigiPay",
            description: "Authorized Banking Services",
            icon: Award,
            color: "purple"
        },
        {
            id: 4,
            name: "Government of India",
            description: "Recognized Certificates",
            icon: CheckCircle2,
            color: "orange"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: 'bg-blue-50 text-blue-600 border-blue-200',
            green: 'bg-green-50 text-green-600 border-green-200',
            purple: 'bg-purple-50 text-purple-600 border-purple-200',
            orange: 'bg-orange-50 text-orange-600 border-orange-200'
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className="py-12 lg:py-16 bg-gray-50 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-gray-600 font-semibold mb-3">Trusted & Certified By</p>
                </div>

                {/* Partner Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${getColorClasses(partner.color)} rounded-2xl p-6 text-center border-2 hover:shadow-lg transition-all`}
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                <partner.icon size={32} />
                            </div>
                            <h3 className="font-black text-gray-900 mb-1 text-sm sm:text-base">{partner.name}</h3>
                            <p className="text-xs text-gray-600">{partner.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                        <Shield size={20} className="text-green-600" />
                        <span className="text-gray-700 font-semibold text-sm">
                            Government Recognized • Trusted Since 2009
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
