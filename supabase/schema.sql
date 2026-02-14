-- ============================================
-- Kusum Computer Centre Database Schema
-- PostgreSQL with Row Level Security (RLS)
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- INQUIRIES TABLE
-- Stores contact form submissions
-- ============================================

CREATE TABLE IF NOT EXISTS inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'in-progress', 'resolved')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);

-- Enable Row Level Security
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Anyone can insert inquiries (public contact form)
CREATE POLICY "Public can insert inquiries"
    ON inquiries
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- RLS Policy: Only authenticated users can view inquiries
CREATE POLICY "Authenticated users can view inquiries"
    ON inquiries
    FOR SELECT
    TO authenticated
    USING (true);

-- RLS Policy: Only authenticated users can update inquiries
CREATE POLICY "Authenticated users can update inquiries"
    ON inquiries
    FOR UPDATE
    TO authenticated
    USING (true);

-- RLS Policy: Only authenticated users can delete inquiries
CREATE POLICY "Authenticated users can delete inquiries"
    ON inquiries
    FOR DELETE
    TO authenticated
    USING (true);

-- ============================================
-- STUDENTS TABLE
-- Stores enrolled student records
-- ============================================

CREATE TABLE IF NOT EXISTS students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    course VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    address TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'dropped')),
    enrolled_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_students_status ON students(status);
CREATE INDEX IF NOT EXISTS idx_students_course ON students(course);
CREATE INDEX IF NOT EXISTS idx_students_enrolled_at ON students(enrolled_at DESC);
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);

-- Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Only authenticated users can perform all operations
CREATE POLICY "Authenticated users can view students"
    ON students
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated users can insert students"
    ON students
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated users can update students"
    ON students
    FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated users can delete students"
    ON students
    FOR DELETE
    TO authenticated
    USING (true);

-- ============================================
-- TRIGGERS
-- Auto-update updated_at timestamp
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for inquiries table
CREATE TRIGGER update_inquiries_updated_at
    BEFORE UPDATE ON inquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for students table
CREATE TRIGGER update_students_updated_at
    BEFORE UPDATE ON students
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- Uncomment to insert sample data
-- ============================================

/*
INSERT INTO inquiries (name, email, phone, subject, message, status, created_at) VALUES
    ('Rahul Sharma', 'rahul@example.com', '9876543210', 'CCC Course Inquiry', 'I want to know about the CCC course duration and fees.', 'new', NOW() - INTERVAL '2 days'),
    ('Priya Singh', 'priya@example.com', '9123456789', 'O-Level Admission', 'When is the next batch starting for O-Level?', 'in-progress', NOW() - INTERVAL '1 day'),
    ('Amit Kumar', 'amit@example.com', '9988776655', 'PAN Card Service', 'How much time does it take to get a new PAN card?', 'resolved', NOW() - INTERVAL '5 days');

INSERT INTO students (name, email, phone, course, dob, address, status, enrolled_at) VALUES
    ('Anjali Verma', 'anjali@example.com', '9876543211', 'CCC', '2000-05-15', 'Varanasi, UP', 'active', NOW() - INTERVAL '30 days'),
    ('Vikash Yadav', 'vikash@example.com', '9123456788', 'O-Level', '1998-08-22', 'Varanasi, UP', 'active', NOW() - INTERVAL '15 days');
*/
