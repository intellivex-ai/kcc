import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand & About */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <span className="text-secondary font-bold text-xl">KCC</span>
                            </div>
                            <span className="text-xl font-bold">Kusum Computer Centre</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Empowering Rajatalab with Digital Excellence. Your trusted partner for Computer Education, Banking Seva, and Government Services.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">All Services</Link></li>
                            <li><Link to="/education" className="text-gray-300 hover:text-white transition-colors">CCC Course</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">Our Services</h3>
                        <ul className="space-y-2">
                            <li><span className="text-gray-300">Aadhar Banking (AEPS)</span></li>
                            <li><span className="text-gray-300">Money Transfer</span></li>
                            <li><span className="text-gray-300">PAN & Voter ID</span></li>
                            <li><span className="text-gray-300">Income/Caste Certificates</span></li>
                            <li><span className="text-gray-300">Rail & Air Tickets</span></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">
                                    N.H.-2 G.T. Road, Rajatalab,<br />
                                    Varanasi, Uttar Pradesh - 221311
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-secondary shrink-0" size={18} />
                                <div>
                                    <span className="block text-gray-300 text-sm font-bold">Naveen Kumar</span>
                                    <span className="text-gray-300 text-sm">+91 97956 33704</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-secondary shrink-0" size={18} />
                                <span className="text-gray-300 text-sm">contact@kusumcc.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Kusum Computer Centre. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
