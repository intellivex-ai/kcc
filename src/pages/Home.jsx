import React from 'react';
import Hero from '../components/Hero';
import CourseCatalog from '../components/CourseCatalog';
import BatchTable from '../components/BatchTable';
import ServiceMatrix from '../components/ServiceMatrix';
import DocumentHelper from '../components/DocumentHelper';
import StatsCounter from '../components/StatsCounter';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import PartnerLogos from '../components/PartnerLogos';
import VideoTour from '../components/VideoTour';

const Home = () => {
    return (
        <div className="space-y-0">
            <Hero />
            <StatsCounter />
            <CourseCatalog />
            <BatchTable />
            <PartnerLogos />
            <ServiceMatrix />
            <VideoTour />
            <Testimonials />
            <Gallery />
            <DocumentHelper />
            <Newsletter />
            <FAQ />
        </div>
    );
};

export default Home;
