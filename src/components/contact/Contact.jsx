import React from 'react';

const Contact = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1818A6] mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">Feel free to reach out to us via the following contact details.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#1818A6] mb-3">Our Address</h3>
            <p className="text-center text-gray-700">
              123 Real Estate Ave, Suite 456<br />
              Lekki, Lagos, Nigeria
            </p>
          </div>

          {/* Phone Number Card */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#1818A6] mb-3">Phone Number</h3>
            <p className="text-center text-gray-700">
              <a href="tel:+234123456789" className="text-blue-600 hover:text-blue-800">+234 123 456 789</a>
            </p>
          </div>

          {/* Email Address Card */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#1818A6] mb-3">Email Address</h3>
            <p className="text-center text-gray-700">
              <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-800">info@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
