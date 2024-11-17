import React, { useState } from 'react';

// A simple function to simulate form submission
const handleSubmit = (e, formData) => {
  e.preventDefault();
  console.log("Form Submitted: ", formData);
};

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    handleSubmit(e, formData);
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-[#1818A6] mb-6">
        Support Center
      </h1>

      {/* Support Options */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-[#1818A6] mb-4">
          How can we help you?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          If you have any questions or need assistance, feel free to reach out.
        </p>

        {/* Support Option Boxes */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {/* Email Support Box */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full sm:w-64 text-center">
            <h3 className="text-xl font-semibold text-[#1818A6] mb-2">Email</h3>
            <p className="text-gray-600">support@bluesrealestate.com</p>
          </div>

          {/* Phone Support Box */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full sm:w-64 text-center">
            <h3 className="text-xl font-semibold text-[#1818A6] mb-2">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-[#1818A6] mb-6">Submit a Query</h2>

        {formSubmitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              Thank you for reaching out! We will get back to you soon.
            </h3>
            <p className="text-gray-600">We have received your message.</p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-lg text-gray-700 mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1818A6] focus:border-[#1818A6]"
                required
              />
            </div>

            <div>
              <label className="block text-lg text-gray-700 mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1818A6] focus:border-[#1818A6]"
                required
              />
            </div>

            <div>
              <label className="block text-lg text-gray-700 mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1818A6] focus:border-[#1818A6]"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-[#1818A6] text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SupportPage;
