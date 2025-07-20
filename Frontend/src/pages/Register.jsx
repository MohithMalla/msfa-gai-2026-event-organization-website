import React from 'react';

function Register() {
  const fees = [
    {
      category: "Academician",
      indian: "₹8000",
      foreign: "$200",
    },
    {
      category: "Students (UG, PG, Ph.D. Research Scholars)",
      indian: "₹4000",
      foreign: "$150",
    },
    {
      category: "Industry Participants",
      indian: "₹10000",
      foreign: "$250",
    },
    {
      category: "Only Participation",
      indian: "₹3000",
      foreign: "$100",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-10 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 font-titillium border-b-2 border-yellow-400 pb-2">
        Registration Fee
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Indian (INR)</th>
              <th className="px-4 py-3 font-semibold">Foreign (USD)</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {fees.map((fee, index) => (
              <tr key={index} className="hover:bg-yellow-50">
                <td className="px-4 py-3 border-t border-gray-200">{fee.category}</td>
                <td className="px-4 py-3 border-t border-gray-200">{fee.indian}</td>
                <td className="px-4 py-3 border-t border-gray-200">{fee.foreign}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Register;
