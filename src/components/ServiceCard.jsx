import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group h-full flex flex-col"
        >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${service.category === 'Banking' ? 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white' :
                    service.category === 'Education' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                        service.category === 'Insurance' ? 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' :
                            'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white'
                }`}>
                <Icon size={28} />
            </div>

            <div className="mb-4">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">{service.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors">{service.title}</h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
            </p>

            <Link
                to="/services"
                className="inline-flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
            >
                Learn More <ArrowRight size={16} className="ml-1" />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
