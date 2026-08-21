import React from 'react';

const batches = [
  { id: 1, name: 'Morning Regular Batch', course: 'ADCA / DCA', time: '08:00 AM - 10:00 AM', days: 'Mon - Sat', status: 'Filling Fast', seats: '3 Seats Left' },
  { id: 2, name: 'Mid-Day Accounting Batch', course: 'Tally Prime + GST', time: '11:00 AM - 01:00 PM', days: 'Mon - Fri', status: 'Open', seats: '8 Seats Left' },
  { id: 3, name: 'Afternoon Skill Batch', course: 'Basic Skills / Typing', time: '02:00 PM - 04:00 PM', days: 'Mon - Sat', status: 'Open', seats: '6 Seats Left' },
  { id: 4, name: 'Evening Career Batch', course: 'ADCA / CCC Prep', time: '04:30 PM - 06:30 PM', days: 'Mon - Sat', status: 'Filling Fast', seats: '2 Seats Left' }
];

const BatchTable = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Flexible Schedule</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Upcoming Batch Timings</h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Choose a timing that fits your daily routine with small batch sizes for personal attention.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <th className="py-4 px-6">Batch Name</th>
                <th className="py-4 px-6">Course</th>
                <th className="py-4 px-6">Timing</th>
                <th className="py-4 px-6">Days</th>
                <th className="py-4 px-6">Availability</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {batches.map((batch) => (
                <tr key={batch.id} className="hover:bg-slate-50/80 transition-colors duration-150">
                  <td className="py-4 px-6 font-semibold text-slate-900">{batch.name}</td>
                  <td className="py-4 px-6">{batch.course}</td>
                  <td className="py-4 px-6 font-medium text-blue-700">{batch.time}</td>
                  <td className="py-4 px-6">{batch.days}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      batch.status === 'Filling Fast'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {batch.status} ({batch.seats})
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors duration-200"
                    >
                      Book Seat
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BatchTable;
