import { performance } from 'node:perf_hooks';

// Generate mock data
const numStudents = 10000;
const students = Array.from({ length: numStudents }, (_, i) => ({
    id: i,
    name: `Student Name ${i}`,
    email: `student${i}@example.com`,
    phone: `555-${String(i).padStart(4, '0')}`,
    course: i % 2 === 0 ? 'Computer Science' : 'Business'
}));

const courseFilter = 'Computer Science';
const searchTerm = 'student';

// Original approach (O(kN))
function originalFilter() {
    let filtered = students;

    if (courseFilter !== 'all') {
        filtered = filtered.filter(std => std.course === courseFilter);
    }

    if (searchTerm) {
        filtered = filtered.filter(std =>
            std.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            std.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            std.phone.includes(searchTerm)
        );
    }

    return filtered;
}

// Optimized approach (O(N))
function optimizedFilter() {
    const lowerSearchTerm = searchTerm ? searchTerm.toLowerCase() : '';

    const filtered = students.filter(std => {
        const matchesCourse = courseFilter === 'all' || std.course === courseFilter;

        const matchesSearch = !searchTerm || (
            std.name.toLowerCase().includes(lowerSearchTerm) ||
            std.email.toLowerCase().includes(lowerSearchTerm) ||
            std.phone.includes(searchTerm)
        );

        return matchesCourse && matchesSearch;
    });

    return filtered;
}

const runs = 100;

// Benchmark original
let startOriginal = performance.now();
for (let i = 0; i < runs; i++) {
    originalFilter();
}
let endOriginal = performance.now();
const timeOriginal = endOriginal - startOriginal;

// Benchmark optimized
let startOptimized = performance.now();
for (let i = 0; i < runs; i++) {
    optimizedFilter();
}
let endOptimized = performance.now();
const timeOptimized = endOptimized - startOptimized;

console.log(`Original time: ${timeOriginal.toFixed(2)}ms`);
console.log(`Optimized time: ${timeOptimized.toFixed(2)}ms`);
console.log(`Performance improvement: ${((timeOriginal - timeOptimized) / timeOriginal * 100).toFixed(2)}%`);
