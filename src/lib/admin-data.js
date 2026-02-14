/**
 * Admin Data Management Library
 * Handles CRUD operations for inquiries and students
 * Uses localStorage for demo purposes
 */

const INQUIRIES_KEY = 'kcc_inquiries';
const STUDENTS_KEY = 'kcc_students';

// Demo data generator
const generateDemoInquiries = () => [
    {
        id: '1',
        name: 'Rahul Sharma',
        email: 'rahul@example.com',
        phone: '9876543210',
        subject: 'CCC Course Inquiry',
        message: 'I want to know about the CCC course duration and fees.',
        status: 'new',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: '2',
        name: 'Priya Singh',
        email: 'priya@example.com',
        phone: '9123456789',
        subject: 'O-Level Admission',
        message: 'When is the next batch starting for O-Level?',
        status: 'in-progress',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: '3',
        name: 'Amit Kumar',
        email: 'amit@example.com',
        phone: '9988776655',
        subject: 'PAN Card Service',
        message: 'How much time does it take to get a new PAN card?',
        status: 'resolved',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
    }
];

const generateDemoStudents = () => [
    {
        id: '1',
        name: 'Anjali Verma',
        email: 'anjali@example.com',
        phone: '9876543211',
        course: 'CCC',
        dob: '2000-05-15',
        address: 'Varanasi, UP',
        status: 'active',
        enrolledAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: '2',
        name: 'Vikash Yadav',
        email: 'vikash@example.com',
        phone: '9123456788',
        course: 'O-Level',
        dob: '1998-08-22',
        address: 'Varanasi, UP',
        status: 'active',
        enrolledAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString()
    }
];

// Initialize demo data if not exists
const initDemoData = () => {
    if (!localStorage.getItem(INQUIRIES_KEY)) {
        localStorage.setItem(INQUIRIES_KEY, JSON.stringify(generateDemoInquiries()));
    }
    if (!localStorage.getItem(STUDENTS_KEY)) {
        localStorage.setItem(STUDENTS_KEY, JSON.stringify(generateDemoStudents()));
    }
};

// Inquiries CRUD
export const getInquiries = () => {
    initDemoData();
    const data = localStorage.getItem(INQUIRIES_KEY);
    return data ? JSON.parse(data) : [];
};

export const getInquiryById = (id) => {
    const inquiries = getInquiries();
    return inquiries.find(inq => inq.id === id);
};

export const addInquiry = (inquiry) => {
    const inquiries = getInquiries();
    const newInquiry = {
        ...inquiry,
        id: Date.now().toString(),
        status: 'new',
        createdAt: new Date().toISOString()
    };
    inquiries.unshift(newInquiry);
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
    return newInquiry;
};

export const updateInquiry = (id, updates) => {
    const inquiries = getInquiries();
    const index = inquiries.findIndex(inq => inq.id === id);
    if (index !== -1) {
        inquiries[index] = { ...inquiries[index], ...updates };
        localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
        return inquiries[index];
    }
    return null;
};

export const deleteInquiry = (id) => {
    const inquiries = getInquiries();
    const filtered = inquiries.filter(inq => inq.id !== id);
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(filtered));
    return true;
};

// Students CRUD
export const getStudents = () => {
    initDemoData();
    const data = localStorage.getItem(STUDENTS_KEY);
    return data ? JSON.parse(data) : [];
};

export const getStudentById = (id) => {
    const students = getStudents();
    return students.find(std => std.id === id);
};

export const addStudent = (student) => {
    const students = getStudents();
    const newStudent = {
        ...student,
        id: Date.now().toString(),
        status: 'active',
        enrolledAt: new Date().toISOString()
    };
    students.unshift(newStudent);
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
    return newStudent;
};

export const updateStudent = (id, updates) => {
    const students = getStudents();
    const index = students.findIndex(std => std.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updates };
        localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
        return students[index];
    }
    return null;
};

export const deleteStudent = (id) => {
    const students = getStudents();
    const filtered = students.filter(std => std.id !== id);
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(filtered));
    return true;
};

// Analytics
export const getAnalytics = () => {
    const inquiries = getInquiries();
    const students = getStudents();

    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const recentInquiries = inquiries.filter(inq =>
        new Date(inq.createdAt) >= thirtyDaysAgo
    );

    return {
        totalInquiries: inquiries.length,
        newInquiries: inquiries.filter(inq => inq.status === 'new').length,
        totalStudents: students.length,
        activeStudents: students.filter(std => std.status === 'active').length,
        recentInquiries: recentInquiries.length,
        inquiriesByStatus: {
            new: inquiries.filter(inq => inq.status === 'new').length,
            inProgress: inquiries.filter(inq => inq.status === 'in-progress').length,
            resolved: inquiries.filter(inq => inq.status === 'resolved').length
        },
        studentsByCourse: students.reduce((acc, std) => {
            acc[std.course] = (acc[std.course] || 0) + 1;
            return acc;
        }, {})
    };
};

// Export to CSV
export const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csv = [
        headers.join(','),
        ...data.map(row =>
            headers.map(header =>
                JSON.stringify(row[header] || '')
            ).join(',')
        )
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
};

export default {
    getInquiries,
    getInquiryById,
    addInquiry,
    updateInquiry,
    deleteInquiry,
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
    getAnalytics,
    exportToCSV
};
