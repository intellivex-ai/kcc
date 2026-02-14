import React from 'react';
import Hero from '../components/Hero';
import ServiceMatrix from '../components/ServiceMatrix';
import EducationPortal from '../components/EducationPortal';
import DocumentHelper from '../components/DocumentHelper';

const Home = () => {
    return (
        <div className="space-y-0">
            <Hero />
            <ServiceMatrix />
            <EducationPortal />
            <DocumentHelper />
        </div>
    );
};

export default Home;
