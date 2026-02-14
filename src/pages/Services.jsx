import React from 'react';
import ServiceMatrix from '../components/ServiceMatrix';

const Services = () => {
    return (
        <div className="pt-20">
            <div className="bg-primary text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <p className="text-blue-100 max-w-2xl mx-auto">
                    Explore our wide range of digital and government services designed to make your life easier.
                </p>
            </div>
            <ServiceMatrix />
        </div>
    );
};

export default Services;
