export const scholarships = [
    {
        id: 1,
        title: 'Merit-Based Scholarship',
        provider: 'Kusum Computer Centre',
        amount: '₹2,000 - ₹5,000',
        type: 'Merit',
        eligibility: [
            'Scored 80% or above in 10th/12th',
            'Enrolling in O-Level or PGDCA course',
            'First-time students only'
        ],
        benefits: [
            'Up to 30% fee discount',
            'Free study materials',
            'Priority lab access'
        ],
        deadline: '2024-03-31',
        documentsRequired: [
            'Latest marksheet',
            'Aadhar card',
            'Passport size photo',
            'Income certificate (optional)'
        ],
        applicationProcess: 'Visit KCC office with required documents and fill the scholarship application form.',
        termsAndConditions: 'Scholarship applicable on first-year fees only. Cannot be combined with other offers.',
        status: 'Open',
        contactEmail: 'scholarship@kusumcc.in'
    },
    {
        id: 2,
        title: 'Girl Child Education Scholarship',
        provider: 'KCC Women Empowerment Initiative',
        amount: '₹3,000',
        type: 'Category',
        eligibility: [
            'Female students only',
            'Age between 18-30 years',
            'Family income less than ₹3 lakh/year'
        ],
        benefits: [
            'Flat ₹3,000 discount on any course',
            'Flexible payment options',
            'Career counseling sessions',
            'Placement assistance'
        ],
        deadline: '2024-06-30',
        documentsRequired: [
            'Aadhar card',
            'Income certificate',
            'Age proof',
            'Passport size photos (2)'
        ],
        applicationProcess: 'Download application form from website or collect from office. Submit with documents.',
        termsAndConditions: 'Valid for one course enrollment. Non-transferable.',
        status: 'Open',
        contactEmail: 'girlchild@kusumcc.in'
    },
    {
        id: 3,
        title: 'SC/ST/OBC Fee Concession',
        provider: 'Government of UP / KCC',
        amount: '₹1,500 - ₹4,000',
        type: 'Category',
        eligibility: [
            'Valid caste certificate',
            'Resident of Uttar Pradesh',
            'Annual family income below ₹2.5 lakh'
        ],
        benefits: [
            '20-25% fee waiver',
            'Free registration',
            'Installment facility without extra charge'
        ],
        deadline: '2024-12-31',
        documentsRequired: [
            'Caste certificate (authentic)',
            'Income certificate (within 1 year)',
            'Aadhar card',
            'Domicile certificate'
        ],
        applicationProcess: 'Submit documents at admission time. Verification within 2 working days.',
        termsAndConditions: 'Certificate must be government-issued and valid. Subject to verification.',
        status: 'Open',
        contactEmail: 'admissions@kusumcc.in'
    },
    {
        id: 4,
        title: 'Early Bird Discount',
        provider: 'Kusum Computer Centre',
        amount: '₹1,000',
        type: 'Early Bird',
        eligibility: [
            'Enroll within first 10 days of batch announcement',
            'Applicable on all courses',
            'Full fee payment at the time of admission'
        ],
        benefits: [
            '₹1,000 instant discount',
            'Free course materials',
            'Additional 5% off on full payment'
        ],
        deadline: 'Within 10 days of batch announcement',
        documentsRequired: [
            'Basic KYC documents',
            'Payment receipt'
        ],
        applicationProcess: 'Automatic discount on early enrollment and full payment.',
        termsAndConditions: 'Offer valid for limited seats per batch.',
        status: 'Ongoing',
        contactEmail: 'admissions@kusumcc.in'
    },
    {
        id: 5,
        title: 'NIELIT Scholarship Program',
        provider: 'NIELIT (Government of India)',
        amount: 'Course fee waiver',
        type: 'Government',
        eligibility: [
            'Economically weaker section (EWS)',
            'Enrolling in NIELIT courses (CCC/O-Level)',
            'BPL card holders priority'
        ],
        benefits: [
            'Complete course fee waiver',
            'Free exam registration',
            'Study material provided',
            'Post-course placement support'
        ],
        deadline: '2024-04-30',
        documentsRequired: [
            'EWS certificate / BPL card',
            'Income certificate',
            'Aadhar card',
            'Educational certificates',
            'Bank account details'
        ],
        applicationProcess: 'Apply online through NIELIT portal or visit KCC for assisted application.',
        termsAndConditions: 'Subject to NIELIT approval. Limited seats available.',
        status: 'Open',
        contactEmail: 'nielit@kusumcc.in'
    },
    {
        id: 6,
        title: 'Refer & Earn Scholarship',
        provider: 'Kusum Computer Centre',
        amount: '₹500 per referral',
        type: 'Referral',
        eligibility: [
            'Current or past students of KCC',
            'Refer a friend/family member',
            'Referral must complete admission'
        ],
        benefits: [
            '₹500 Amazon voucher per successful referral',
            'Unlimited referrals allowed',
            'Referral also gets ₹300 discount'
        ],
        deadline: 'Ongoing',
        documentsRequired: [
            'Your student ID or enrollment number',
            'Referral\'s contact details'
        ],
        applicationProcess: 'Share referral code at the time of new admission. Benefits credited after fee payment.',
        termsAndConditions: 'Both referrer and referee must maintain good standing. Voucher issued within 15 days.',
        status: 'Ongoing',
        contactEmail: 'referral@kusumcc.in'
    }
];

export const scholarshipTypes = [
    { name: 'All', count: 6 },
    { name: 'Merit', count: 1 },
    { name: 'Category', count: 2 },
    { name: 'Government', count: 1 },
    { name: 'Early Bird', count: 1 },
    { name: 'Referral', count: 1 }
];
