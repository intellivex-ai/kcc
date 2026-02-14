import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import MeetTheTeam from '../components/MeetTheTeam';
import PartnerLogos from '../components/PartnerLogos';

const About = () => {
    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "Empower every student with digital skills and government services accessibility."
        },
        {
            icon: Users,
            title: "Student First",
            description: "Personalized attention and support for every learner's unique journey."
        },
        {
            icon: Award,
            title: "Quality Education",
            description: "Government-certified courses taught by experienced professionals."
        },
        {
            icon: TrendingUp,
            title: "Career Growth",
            description: "Preparing students for government jobs and IT career opportunities."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary to-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">About Kusum Computer Centre</h1>
                    <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                        Your trusted partner for computer education and government services since 2009
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-black text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Established in 2009 in Rajatalab, Varanasi, Kusum Computer Centre has been a pioneer in providing quality computer education and essential government services to our community.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            What started as a small computer training center has grown into a trusted institution serving over 2000+ students. We are proud to be an authorized NIELIT study center and CSC (Common Service Center), offering government-recognized courses and vital services to the public.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our commitment remains unchanged: to bridge the digital divide and empower individuals with skills and services that transform lives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <value.icon size={32} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <PartnerLogos />

            {/* Team */}
            <MeetTheTeam />

            {/* Location */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Visit Our Center</h2>
                    <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.203798547466!2d82.86603217604434!3d25.263725529000635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3fb939e6a943%3A0xe54e60156d9569f6!2sRaja%20Talab%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1707920194848!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kusum Computer Centre Location"
                        ></iframe>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-gray-700 font-semibold mb-2">Rajatalab, Varanasi, Uttar Pradesh</p>
                        <p className="text-gray-600">Open: Monday - Saturday, 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
