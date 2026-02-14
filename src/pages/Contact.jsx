import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20">
            <div className="bg-primary text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-blue-100 max-w-2xl mx-auto">
                    Have a question or need a service? Visit us or get in touch.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-1">Our Location</h3>
                                <p className="text-gray-600">
                                    N.H.-2 G.T. Road, Rajatalab,<br />
                                    Varanasi, Uttar Pradesh - 221311
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-1">Phone Number</h3>
                                <p className="text-gray-900 font-medium">Naveen Kumar</p>
                                <p className="text-gray-600">+91 97956 33704</p>
                                <p className="text-gray-400 text-sm mt-1">Mon-Sat, 9am to 7pm</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full text-purple-600 shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-1">Email Address</h3>
                                <p className="text-gray-600">contact@kusumcc.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.203798547466!2d82.86603217604434!3d25.263725529000635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3fb939e6a943%3A0xe54e60156d9569f6!2sRaja%20Talab%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1707920194848!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kusum Computer Centre Location"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
