import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 py-16 px-4">
        <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-8">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Contact Us</h2>

          <p className="text-center text-gray-600 mb-8">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>

          <form onSubmit={handleSubmit}>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your full name" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your email address" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Write your message here"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ContactUs
