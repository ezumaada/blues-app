import React from 'react';
import Footer from '../../components/footer/Footer';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="mx-3 mt-5 md:mx-10">
        <h1 className="font-bold text-3xl text-center text-black mb-6">Welcome to Blues</h1>
        
        <div className="flex justify-center">
          <form
            action="submit"
            className="bg-white border-2 border-solid border-gray-300 shadow-md rounded-lg p-6 w-full sm:w-96 md:w-1/3"
          >
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
            
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-700 text-sm">Don't have an account? 
                <a className="text-blue-500 font-bold" href="/">Sign Up</a>
              </p>
              <p className="text-gray-700 text-sm">
                <a className="text-blue-500 font-bold" href="/">Forgot Password?</a>
              </p>
            </div>

            <button
              className="bg-blue-500 w-full text-white p-3 rounded hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
