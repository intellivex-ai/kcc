import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

const MeetTheTeam = () => {
    const team = [
        {
            id: 1,
            name: "Naveen Kumar",
            role: "Founder & Director",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Naveen",
            bio: "15+ years of experience in computer education. Passionate about empowering students with digital skills.",
            phone: "+91 9795633704",
            email: "naveen@kusumcc.com"
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Senior Instructor",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya2",
            bio: "Expert in O-Level and CCC courses. Dedicated to student success with personalized attention.",
            email: "priya@kusumcc.com"
        },
        {
            id: 3,
            name: "Rahul Verma",
            role: "Lab Coordinator",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul2",
            bio: "Manages practical labs and ensures students get hands-on experience with latest technology.",
            email: "rahul@kusumcc.com"
        },
        {
            id: 4,
            name: "Anjali Singh",
            role: "Student Support",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali2",
            bio: "Assists students with inquiries, admissions, and certificate verification processes.",
            email: "anjali@kusumcc.com"
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Team</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Meet Our Experts</h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Experienced professionals dedicated to your success
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100 group"
                        >
                            {/* Profile Image */}
                            <div className="relative mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto bg-white border-4 border-white shadow-md group-hover:scale-110 transition-transform"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-full transition-colors"></div>
                            </div>

                            {/* Info */}
                            <div className="text-center mb-4">
                                <h3 className="text-lg font-black text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                            </div>

                            {/* Contact Icons */}
                            <div className="flex justify-center gap-3 pt-4 border-t border-gray-200">
                                {member.email && (
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                                    >
                                        <Mail size={14} />
                                    </a>
                                )}
                                {member.phone && (
                                    <a
                                        href={`tel:${member.phone}`}
                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all shadow-sm"
                                    >
                                        <Phone size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">Want to join our team?</p>
                    <a
                        href="/contact"
                        className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MeetTheTeam;
