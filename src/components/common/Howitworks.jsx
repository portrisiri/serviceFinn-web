import React from 'react'

function Howitworks() {
  const steps = [
    {
      id: 1,
      title: "Search for a Service",
      description:
        "Browse through various categories or search directly for the service you need."
    },
    {
      id: 2,
      title: "Compare Providers",
      description:
        "Read reviews, check ratings, and compare prices to find the perfect match."
    },
    {
      id: 3,
      title: "Book & Pay Securely",
      description:
        "Schedule an appointment and pay securely through our platform."
    },
    {
      id: 4,
      title: "Leave a Review",
      description:
        "Share your experience to help others find quality service providers."
    }
  ];

  return (
    <div className="bg-[#F8F8F8] p-8 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg font-bold mb-4">
              {step.id}
            </div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Howitworks