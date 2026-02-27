/**
 * Admin Data Management Library - Supabase Backend
 * Handles CRUD operations for inquiries and students
 * Production-ready with PostgreSQL and real-time persistence
 */

import supabase from './supabase';

// ============================================
// INQUIRIES CRUD
// ============================================

/**
 * Get all inquiries
 */
export const getInquiries = async () => {
    try {
        const { data, error } = await supabase
            .from('inquiries')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        return [];
    }
};

/**
 * Get inquiry by ID
 */
export const getInquiryById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('inquiries')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching inquiry:', error);
        return null;
    }
};

/**
 * Add new inquiry
 */
export const addInquiry = async (inquiry) => {
    try {
        const { data, error } = await supabase
            .from('inquiries')
            .insert({
                name: inquiry.name,
                email: inquiry.email,
                phone: inquiry.phone,
                subject: inquiry.subject,
                message: inquiry.message,
                status: 'new'
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding inquiry:', error);
        throw error;
    }
};

/**
 * Update inquiry
 */
export const updateInquiry = async (id, updates) => {
    try {
        const { data, error } = await supabase
            .from('inquiries')
            .update({
                ...updates,
                updated_at: new Date().toISOString()
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating inquiry:', error);
        return null;
    }
};

/**
 * Delete inquiry
 */
export const deleteInquiry = async (id) => {
    try {
        const { error } = await supabase
            .from('inquiries')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return true;
    } catch (error) {
        console.error('Error deleting inquiry:', error);
        return false;
    }
};

// ============================================
// STUDENTS CRUD
// ============================================

/**
 * Get all students
 */
export const getStudents = async () => {
    try {
        const { data, error } = await supabase
            .from('students')
            .select('*')
            .order('enrolled_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching students:', error);
        return [];
    }
};

/**
 * Get student by ID
 */
export const getStudentById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('students')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching student:', error);
        return null;
    }
};

/**
 * Add new student
 */
export const addStudent = async (student) => {
    try {
        const { data, error } = await supabase
            .from('students')
            .insert({
                name: student.name,
                email: student.email,
                phone: student.phone,
                course: student.course,
                dob: student.dob,
                address: student.address,
                status: 'active',
                // New fields for Online Admission
                gender: student.gender,
                batch_time: student.batchTime,
                qualification: student.qualification,
                percentage: student.percentage,
                payment_method: student.paymentMethod,
                payment_status: student.paymentStatus || 'pending'
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding student:', error);
        throw error;
    }
};

/**
 * Update student
 */
export const updateStudent = async (id, updates) => {
    try {
        const { data, error } = await supabase
            .from('students')
            .update({
                ...updates,
                updated_at: new Date().toISOString()
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating student:', error);
        return null;
    }
};

/**
 * Delete student
 */
export const deleteStudent = async (id) => {
    try {
        const { error } = await supabase
            .from('students')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return true;
    } catch (error) {
        console.error('Error deleting student:', error);
        return false;
    }
};

// ============================================
// SUBSCRIBERS CRUD
// ============================================

/**
 * Get all subscribers
 */
export const getSubscribers = async () => {
    try {
        const { data, error } = await supabase
            .from('subscribers')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching subscribers:', error);
        return [];
    }
};

/**
 * Add new subscriber
 */
export const addSubscriber = async (email) => {
    try {
        // Check if already subscribed
        const { data: existing } = await supabase
            .from('subscribers')
            .select('id')
            .eq('email', email)
            .single();

        if (existing) return existing;

        const { data, error } = await supabase
            .from('subscribers')
            .insert({ email })
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding subscriber:', error);
        throw error;
    }
};

/**
 * Delete subscriber
 */
export const deleteSubscriber = async (id) => {
    try {
        const { error } = await supabase
            .from('subscribers')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return true;
    } catch (error) {
        console.error('Error deleting subscriber:', error);
        return false;
    }
};

// ============================================
// RESULTS CRUD
// ============================================

/**
 * Get all results
 */
export const getResults = async () => {
    try {
        const { data, error } = await supabase
            .from('results')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching results:', error);
        return [];
    }
};

/**
 * Get result by Roll Number
 */
export const getResultByRollNumber = async (rollNumber) => {
    try {
        const { data, error } = await supabase
            .from('results')
            .select('*')
            .eq('roll_number', rollNumber)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching result:', error);
        return null;
    }
};

/**
 * Add new result
 */
export const addResult = async (result) => {
    try {
        const { data, error } = await supabase
            .from('results')
            .insert({
                roll_number: result.rollNumber,
                student_name: result.studentName,
                course: result.course,
                exam_date: result.examDate,
                status: result.status,
                grade: result.grade,
                total_marks: result.totalMarks,
                obtained_marks: result.obtainedMarks,
                percentage: result.percentage,
                subjects: result.subjects // JSON array
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding result:', error);
        throw error;
    }
};

/**
 * Delete result
 */
export const deleteResult = async (id) => {
    try {
        const { error } = await supabase
            .from('results')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return true;
    } catch (error) {
        console.error('Error deleting result:', error);
        return false;
    }
};

// ============================================
// ANALYTICS
// ============================================

/**
 * Get analytics data
 */
export const getAnalytics = async () => {
    try {
        // Fetch all inquiries and students
        const [inquiriesResponse, studentsResponse] = await Promise.all([
            supabase.from('inquiries').select('status, created_at'),
            supabase.from('students').select('status, course, enrolled_at')
        ]);

        if (inquiriesResponse.error) throw inquiriesResponse.error;
        if (studentsResponse.error) throw studentsResponse.error;

        const inquiries = inquiriesResponse.data || [];
        const students = studentsResponse.data || [];

        // Calculate stats
        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

        const recentInquiries = inquiries.filter(inq =>
            new Date(inq.created_at) >= thirtyDaysAgo
        );

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
            recentInquiries: recentInquiries.length,
            inquiriesByStatus,
            studentsByCourse
        };
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return {
            totalInquiries: 0,
            newInquiries: 0,
            totalStudents: 0,
            activeStudents: 0,
            recentInquiries: 0,
            inquiriesByStatus: { new: 0, inProgress: 0, resolved: 0 },
            studentsByCourse: {}
        };
    }
};

// ============================================
// EXPORT TO CSV
// ============================================

/**
 * Export data to CSV
 */
export const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csv = [
        headers.join(','),
        ...data.map(row =>
            headers.map(header => {
                const value = row[header];
                return JSON.stringify(typeof value === 'object' ? JSON.stringify(value) : (value || ''));
            }).join(',')
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

// Export all functions
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
    getSubscribers,
    addSubscriber,
    deleteSubscriber,
    getResults,
    getResultByRollNumber,
    addResult,
    deleteResult,
    getAnalytics,
    exportToCSV
};
