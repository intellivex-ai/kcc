/**
 * Admin Data Management Library - Firebase Backend
 * Handles CRUD operations for inquiries and students with Firestore
 */

import { db } from './firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

// Fallback in-memory state
let localInquiries = [
    { id: '1', name: 'Rahul Sharma', email: 'rahul@example.com', phone: '9876543210', course: 'ADCA', status: 'new', created_at: new Date().toISOString() }
];

let localStudents = [
    { id: '1', name: 'Priya Patel', email: 'priya@example.com', phone: '9876543211', course: 'DCA', status: 'active', enrolled_at: new Date().toISOString() }
];

// ============================================
// INQUIRIES CRUD
// ============================================

export const getInquiries = async () => {
    try {
        const q = query(collection(db, 'inquiries'), orderBy('created_at', 'desc'));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() });
        });
        return docs.length > 0 ? docs : localInquiries;
    } catch (error) {
        console.error('Error fetching inquiries from Firebase:', error);
        return localInquiries;
    }
};

export const getInquiryById = async (id) => {
    try {
        const inquiries = await getInquiries();
        return inquiries.find(inq => inq.id === id) || null;
    } catch (error) {
        return null;
    }
};

export const addInquiry = async (inquiry) => {
    try {
        const docRef = await addDoc(collection(db, 'inquiries'), {
            name: inquiry.name,
            email: inquiry.email,
            phone: inquiry.phone,
            subject: inquiry.subject,
            message: inquiry.message,
            status: 'new',
            created_at: new Date().toISOString()
        });
        const newInquiry = { id: docRef.id, ...inquiry, status: 'new', created_at: new Date().toISOString() };
        localInquiries.unshift(newInquiry);
        return newInquiry;
    } catch (error) {
        console.error('Error adding inquiry to Firebase:', error);
        const fallbackInquiry = { id: Date.now().toString(), ...inquiry, status: 'new', created_at: new Date().toISOString() };
        localInquiries.unshift(fallbackInquiry);
        return fallbackInquiry;
    }
};

export const updateInquiry = async (id, updates) => {
    try {
        const docRef = doc(db, 'inquiries', id);
        await updateDoc(docRef, { ...updates, updated_at: new Date().toISOString() });
        return { id, ...updates };
    } catch (error) {
        console.error('Error updating inquiry in Firebase:', error);
        return null;
    }
};

export const deleteInquiry = async (id) => {
    try {
        const docRef = doc(db, 'inquiries', id);
        await deleteDoc(docRef);
        localInquiries = localInquiries.filter(inq => inq.id !== id);
        return true;
    } catch (error) {
        console.error('Error deleting inquiry in Firebase:', error);
        localInquiries = localInquiries.filter(inq => inq.id !== id);
        return true;
    }
};

// ============================================
// STUDENTS CRUD
// ============================================

export const getStudents = async () => {
    try {
        const q = query(collection(db, 'students'), orderBy('enrolled_at', 'desc'));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() });
        });
        return docs.length > 0 ? docs : localStudents;
    } catch (error) {
        console.error('Error fetching students from Firebase:', error);
        return localStudents;
    }
};

export const getStudentById = async (id) => {
    try {
        const students = await getStudents();
        return students.find(s => s.id === id) || null;
    } catch (error) {
        return null;
    }
};

export const addStudent = async (student) => {
    try {
        const docRef = await addDoc(collection(db, 'students'), {
            name: student.name,
            email: student.email,
            phone: student.phone,
            course: student.course,
            dob: student.dob,
            address: student.address,
            status: 'active',
            enrolled_at: new Date().toISOString()
        });
        const newStudent = { id: docRef.id, ...student, status: 'active', enrolled_at: new Date().toISOString() };
        localStudents.unshift(newStudent);
        return newStudent;
    } catch (error) {
        console.error('Error adding student to Firebase:', error);
        const fallbackStudent = { id: Date.now().toString(), ...student, status: 'active', enrolled_at: new Date().toISOString() };
        localStudents.unshift(fallbackStudent);
        return fallbackStudent;
    }
};

export const updateStudent = async (id, updates) => {
    try {
        const docRef = doc(db, 'students', id);
        await updateDoc(docRef, { ...updates, updated_at: new Date().toISOString() });
        return { id, ...updates };
    } catch (error) {
        console.error('Error updating student in Firebase:', error);
        return null;
    }
};

export const deleteStudent = async (id) => {
    try {
        const docRef = doc(db, 'students', id);
        await deleteDoc(docRef);
        localStudents = localStudents.filter(s => s.id !== id);
        return true;
    } catch (error) {
        console.error('Error deleting student in Firebase:', error);
        localStudents = localStudents.filter(s => s.id !== id);
        return true;
    }
};

export const getAnalytics = async () => {
    try {
        const inquiries = await getInquiries();
        const students = await getStudents();

        const inquiriesByStatus = {
            new: inquiries.filter(inq => inq.status === 'new').length,
            inProgress: inquiries.filter(inq => inq.status === 'in-progress').length,
            resolved: inquiries.filter(inq => inq.status === 'resolved').length
        };

        const studentsByCourse = students.reduce((acc, std) => {
            acc[std.course] = (acc[std.course] || 0) + 1;
            return acc;
        }, {});

        return {
            totalInquiries: inquiries.length,
            newInquiries: inquiriesByStatus.new,
            totalStudents: students.length,
            activeStudents: students.filter(std => std.status === 'active').length,
            recentInquiries: inquiries.length,
            inquiriesByStatus,
            studentsByCourse
        };
    } catch (error) {
        return {
            totalInquiries: 1,
            newInquiries: 1,
            totalStudents: 1,
            activeStudents: 1,
            recentInquiries: 1,
            inquiriesByStatus: { new: 1, inProgress: 0, resolved: 0 },
            studentsByCourse: { ADCA: 1 }
        };
    }
};

export const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) return;
    const headers = Object.keys(data[0]);
    const csv = [
        headers.join(','),
        ...data.map(row => headers.map(header => JSON.stringify(row[header] || '')).join(','))
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
