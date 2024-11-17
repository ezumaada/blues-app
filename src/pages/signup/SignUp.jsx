import React from 'react';
import Footer from '../../components/footer/Footer';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="mx-3 mt-5 md:mx-10">
        <h1 className="font-bold text-3xl text-center text-black mb-6">Create Your Account</h1>
        
        <div className="flex justify-center">
          <form
            action="submit"
            className="bg-white border-2 border-solid border-gray-300 shadow-md rounded-lg p-6 w-full sm:w-96 md:w-1/3"
          >
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-700 font-bold mb-2 block">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700 font-bold mb-2 block">E-mail Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="text-gray-700 font-bold mb-2 block">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="text-gray-700 font-bold mb-2 block">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>

            {/* Submit Button */}
            <button
              className="bg-blue-500 w-full text-white p-3 rounded hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Sign Up
            </button>

            {/* Redirect to Login Link */}
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-sm">
                Already have an account?{' '}
                <a href="/login" className="text-blue-500 font-bold">Log In</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
