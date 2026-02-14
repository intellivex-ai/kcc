import { Landmark, GraduationCap, FileText, CreditCard, ShieldCheck, Zap, Smartphone, Globe, UserCheck, Plane } from 'lucide-react';

export const services = [
    {
        id: 1,
        title: "AEPS Banking",
        category: "Banking",
        icon: Landmark,
        desc: "Withdraw cash instantly using just your Aadhar thumb impression. Secure and fast.",
        featured: true
    },
    {
        id: 2,
        title: "Money Transfer",
        category: "Banking",
        icon: CreditCard,
        desc: "Instant money transfer to any bank account in India with low transaction fees.",
        featured: true
    },
    {
        id: 3,
        title: "CCC Course",
        category: "Education",
        icon: GraduationCap,
        desc: "Government recognized 3-month Course on Computer Concepts. Essential for govt jobs.",
        featured: true
    },
    {
        id: 4,
        title: "PAN Card Services",
        category: "Govt Services",
        icon: UserCheck,
        desc: "New PAN Card application and corrections. Get your PAN delivered to your home.",
        featured: true
    },
    {
        id: 5,
        title: "Income/Caste Certificate",
        category: "Govt Services",
        icon: FileText,
        desc: "Apply for Income, Caste, and Domicile certificates from the comfort of our center.",
        featured: false
    },
    {
        id: 6,
        title: "Insurance Services",
        category: "Insurance",
        icon: ShieldCheck,
        desc: "Life, Bike, and Car insurance policies at affordable premiums.",
        featured: false
    },
    {
        id: 7,
        title: "Utility Bill Payments",
        category: "Utility",
        icon: Zap,
        desc: "Pay your Electricity, Water, and Postpaid mobile bills instantly.",
        featured: false
    },
    {
        id: 8,
        title: "Mobile Recharge",
        category: "Utility",
        icon: Smartphone,
        desc: "Recharge for Jio, Airtel, Vi, and BSNL with exclusive offers.",
        featured: false
    },
    {
        id: 9,
        title: "Passport Seva",
        category: "Govt Services",
        icon: Globe,
        desc: "New Passport application and appointment booking assistance.",
        featured: false
    },
    {
        id: 10,
        title: "Travel Booking",
        category: "Utility",
        icon: Plane,
        desc: "Book Train (IRCTC) and Flight tickets at the best prices.",
        featured: false
    },
];
