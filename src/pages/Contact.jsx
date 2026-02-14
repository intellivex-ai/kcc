import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "What is the duration of the CCC course?",
            answer: "The CCC (Course on Computer Concepts) is an 80-hour government-certified course, typically completed in 3 months. It is mandatory for many UP government jobs."
        },
        {
            question: "Do you provide Admit Card and Result services?",
            answer: "Yes! We download and print Admit Cards for all major exams (SSC, UPSC, UP Police, etc.) and provide high-quality result printouts."
        },
        {
            question: "Can I withdraw money using my Aadhaar card?",
            answer: "Absolutely. We are a DigiPay authorized centre. You can withdraw cash from any bank account using just your Aadhaar number and fingerprint."
        },
        {
            question: "What documents are required for Scholarship application?",
            answer: "You typically need your Aadhar Card, Bank Passbook, Last Year's Result, Income Certificate, Caste Certificate, and a Passport size photo."
        },
        {
            question: "What are your opening hours?",
            answer: "We are open from Monday to Saturday, 9:00 AM to 7:00 PM. We are closed on Sundays."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-20">
            <div className="bg-primary text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-blue-100 max-w-2xl mx-auto">
                    Have a question or need a service? Visit us or get in touch.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 mb-20">

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

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <button
                                    className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-semibold text-gray-900">{faq.question}</span>
                                    <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-5 pt-0 text-gray-600 bg-gray-50/50">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
