import React from 'react';
import Hero from '../components/Hero';
import ServiceMatrix from '../components/ServiceMatrix';
import EducationPortal from '../components/EducationPortal';
import DocumentHelper from '../components/DocumentHelper';
import StatsCounter from '../components/StatsCounter';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import CourseCalendar from '../components/CourseCalendar';

const Home = () => {
    return (
        <div className="space-y-0">
            <Hero />
            <StatsCounter />
            <ServiceMatrix />
            <EducationPortal />
            <CourseCalendar />
            <Testimonials />
            <Gallery />
            <DocumentHelper />
            <Newsletter />
            <FAQ />
        </div>
    );
};

export default Home;
