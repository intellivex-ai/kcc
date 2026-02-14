import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-[2rem] p-7 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-primary/10 transition-all group h-full flex flex-col relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${service.category === 'Banking' ? 'bg-green-50 text-green-600 group-hover:bg-green-500 group-hover:text-white group-hover:rotate-6 shadow-sm group-hover:shadow-green-500/30' :
                service.category === 'Education' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white group-hover:rotate-6 shadow-sm group-hover:shadow-blue-500/30' :
                    service.category === 'Insurance' ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-500 group-hover:text-white group-hover:rotate-6 shadow-sm group-hover:shadow-purple-500/30' :
                        'bg-yellow-50 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white group-hover:rotate-6 shadow-sm group-hover:shadow-yellow-500/30'
                }`}>
                <Icon size={30} strokeWidth={1.5} />
            </div>

            <div className="mb-4">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase bg-gray-50 px-2 py-1 rounded-md">{service.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 group-hover:text-primary transition-colors">{service.title}</h3>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
            </p>

            <Link
                to="/services"
                className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-primary transition-colors"
            >
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
