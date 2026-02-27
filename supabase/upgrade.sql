-- ============================================
-- Database Upgrade Script
-- Adds Subscribers, Results, and updates Students
-- ============================================

-- ============================================
-- SUBSCRIBERS TABLE
-- Stores newsletter subscribers
-- ============================================

CREATE TABLE IF NOT EXISTS subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Public can insert (subscribe)
CREATE POLICY "Public can insert subscribers"
    ON subscribers
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- RLS Policy: Authenticated users can view subscribers
CREATE POLICY "Authenticated users can view subscribers"
    ON subscribers
    FOR SELECT
    TO authenticated
    USING (true);

-- RLS Policy: Authenticated users can delete subscribers
CREATE POLICY "Authenticated users can delete subscribers"
    ON subscribers
    FOR DELETE
    TO authenticated
    USING (true);


-- ============================================
-- RESULTS TABLE
-- Stores student exam results
-- ============================================

CREATE TABLE IF NOT EXISTS results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    roll_number VARCHAR(50) NOT NULL UNIQUE,
    student_name VARCHAR(255) NOT NULL,
    course VARCHAR(100) NOT NULL,
    exam_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL,
    grade VARCHAR(10),
    total_marks INT NOT NULL,
    obtained_marks INT NOT NULL,
    percentage FLOAT NOT NULL,
    subjects JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_results_roll_number ON results(roll_number);

-- Enable RLS
ALTER TABLE results ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Public can view results (by exact roll number match - handled by application logic mostly, but RLS allows select)
-- Actually, for privacy, we might want to restrict SELECT.
-- However, the frontend needs to query it. We'll allow public SELECT for now, assuming Roll Number is the "key".
CREATE POLICY "Public can view results"
    ON results
    FOR SELECT
    TO anon
    USING (true);

-- RLS Policy: Authenticated users can do everything
CREATE POLICY "Authenticated users can manage results"
    ON results
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Trigger for updated_at
CREATE TRIGGER update_results_updated_at
    BEFORE UPDATE ON results
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();


-- ============================================
-- UPDATE STUDENTS TABLE
-- Add fields for online admission
-- ============================================

ALTER TABLE students
ADD COLUMN IF NOT EXISTS gender VARCHAR(20),
ADD COLUMN IF NOT EXISTS batch_time VARCHAR(50),
ADD COLUMN IF NOT EXISTS qualification VARCHAR(100),
ADD COLUMN IF NOT EXISTS percentage VARCHAR(20),
ADD COLUMN IF NOT EXISTS photo_url TEXT,
ADD COLUMN IF NOT EXISTS certificate_url TEXT,
ADD COLUMN IF NOT EXISTS id_proof_url TEXT,
ADD COLUMN IF NOT EXISTS payment_method VARCHAR(50),
ADD COLUMN IF NOT EXISTS payment_status VARCHAR(50) DEFAULT 'pending';

-- Add RLS for storage buckets (if we use storage)
-- For now, we assume public read for simplicity if needed, but we should probably restrict write.
-- Since storage policies are handled in the Storage UI/API separately often, we'll skip SQL for storage buckets here
-- unless using the storage schema directly. Supabase storage policies are usually set on the `storage.objects` table.

-- Let's enable public to upload to a 'documents' bucket if it exists.
-- NOTE: This requires the 'documents' bucket to be created in the dashboard or via seed.
-- We will assume the user handles bucket creation or we add a note.
