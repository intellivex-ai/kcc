export const events = [
    {
        id: 1,
        title: 'Free CCC Orientation Workshop',
        date: '2024-02-20',
        time: '10:00 AM - 12:00 PM',
        type: 'Workshop',
        venue: 'KCC Computer Lab, Rajatalab',
        description: 'Learn about CCC exam pattern, syllabus, and career opportunities. Free guidance session for new students.',
        seats: 30,
        seatsLeft: 12,
        registrationOpen: true,
        instructor: 'Senior Faculty',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
        highlights: [
            'CCC exam overview',
            'Career guidance',
            'Free study material',
            'Doubt clearing session'
        ]
    },
    {
        id: 2,
        title: 'Tally GST Practical Session',
        date: '2024-02-25',
        time: '2:00 PM - 5:00 PM',
        type: 'Seminar',
        venue: 'KCC Main Hall',
        description: 'Hands-on session on Tally Prime with GST features. Learn invoice creation, GST returns, and more.',
        seats: 25,
        seatsLeft: 8,
        registrationOpen: true,
        instructor: 'CA Certified Trainer',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
        highlights: [
            'Live GST filing demo',
            'Invoice generation',
            'TDS & TCS concepts',
            'Certificate of participation'
        ]
    },
    {
        id: 3,
        title: 'CCC Exam - April 2024 Session',
        date: '2024-04-15',
        time: '9:00 AM',
        type: 'Exam',
        venue: 'NIELIT Authorized Center',
        description: 'NIELIT CCC April 2024 examination. Last date for registration: March 15, 2024.',
        seats: null,
        seatsLeft: null,
        registrationOpen: true,
        instructor: null,
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=400&fit=crop',
        highlights: [
            'Registration deadline: Mar 15',
            'Admit card: April 5',
            'Duration: 90 minutes',
            'Results in 4 weeks'
        ]
    },
    {
        id: 4,
        title: 'Digital Marketing Webinar',
        date: '2024-03-05',
        time: '6:00 PM - 7:30 PM',
        type: 'Webinar',
        venue: 'Online (Zoom)',
        description: 'Free webinar on digital marketing career opportunities and required skills for computer students.',
        seats: 100,
        seatsLeft: 45,
        registrationOpen: true,
        instructor: 'Industry Expert',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
        highlights: [
            'Career opportunities',
            'Required certifications',
            'Freelancing tips',
            'Q&A session'
        ]
    },
    {
        id: 5,
        title: 'O-Level Mock Test',
        date: '2024-03-10',
        time: '11:00 AM - 1:00 PM',
        type: 'Exam',
        venue: 'KCC Computer Lab',
        description: 'Free mock test for O-Level M1 (IT Tools) module. Test your preparation before the actual exam.',
        seats: 40,
        seatsLeft: 15,
        registrationOpen: true,
        instructor: 'Faculty Team',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
        highlights: [
            'Actual exam pattern',
            'Instant results',
            'Performance analysis',
            'Doubt clearing'
        ]
    },
    {
        id: 6,
        title: 'Government Job Preparation Workshop',
        date: '2024-03-15',
        time: '10:00 AM - 4:00 PM',
        type: 'Workshop',
        venue: 'KCC Main Hall',
        description: 'Full-day workshop on government exam preparation, computer section tips, and application process.',
        seats: 50,
        seatsLeft: 22,
        registrationOpen: true,
        instructor: 'Expert Panel',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
        highlights: [
            'Exam pattern guide',
            'Computer section tips',
            'Application process',
            'Lunch included'
        ]
    }
];

export const eventTypes = [
    { name: 'All', slug: 'all' },
    { name: 'Workshops', slug: 'workshop' },
    { name: 'Seminars', slug: 'seminar' },
    { name: 'Exams', slug: 'exam' },
    { name: 'Webinars', slug: 'webinar' }
];
