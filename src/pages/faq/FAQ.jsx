import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const faqData = [
  {
    question: "What types of properties do you offer?",
    answer: "We offer residential and commercial properties, including apartments, houses, and office spaces."
  },
  {
    question: "How can I schedule a viewing?",
    answer: "You can schedule a viewing by contacting us through the 'Contact Us' page or by calling our office."
  },
  {
    question: "Do you have properties available for rent?",
    answer: "Yes, we offer both rental and purchase options for a wide variety of properties."
  },
  {
    question: "How do I apply for a property?",
    answer: "To apply for a property, you can fill out an application form on our website or contact our sales team."
  },
  {
    question: "Do you assist with property financing?",
    answer: "Yes, we can connect you with reliable lenders to assist with property financing."
  },
  {
    question: "What is the price range of your properties?",
    answer: "Our properties range from affordable homes starting at $100,000 to luxury estates priced in the millions."
  },
  {
    question: "Do you offer property management services?",
    answer: "Yes, we offer property management services for both owners and renters."
  },
  {
    question: "Are the properties newly built?",
    answer: "We offer both new and pre-owned properties. Each property is thoroughly inspected for quality."
  },
  {
    question: "Can I sell my property through you?",
    answer: "Yes, we provide a listing service for individuals looking to sell their properties."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team through email, phone, or live chat on our website."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the question open/close
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        <Navbar/>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-[#1818A6] mb-6">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <button 
              onClick={() => toggleQuestion(index)} 
              className="w-full text-left px-6 py-4 text-xl font-semibold bg-[#606097] text-white hover:bg-blue-600 transition-all duration-300"
            >
              {faq.question}
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-blue-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FAQ;
