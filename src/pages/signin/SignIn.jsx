import React from 'react'
import Footer from '../../components/footer/Footer'


const SignIn = () => {
  return (
    <div>
        <div className='mx-3 mt-5'>
            <h1 className='font-bold text-3xl text-black'>Welcome to Blues</h1>
            <div>
                <form action="submit" className='border-2 border-solid border-black flex-col shadow-mb mx-7'>
                  <div>
                    <label htmlFor="email" className=" text-gray-700 font-bold mb-2">E-mail-address</label>
                    <input type="email"  id="email" name="email" className="w-full p-2 border border-gray-300 rounded" /></div>
                  <div>
                    <label htmlFor="password"  className=" text-gray-700 font-bold mb-2">Password</label>
                    <input type="text"  id="email" name="email" className="w-full p-2 border border-gray-300 rounded" /></div>
                    <p className='text-gray-700 font-bold mb-2'>Don't have an account? <a className='text-blue-500 font-bold' href='/'>Sign Up</a></p>
                    <p className='text-gray-700 font-bold mb-2'><a className='text-blue-500 font-bold' href='/'>Forgot Password?</a></p>
                    <button className='bg-blue-500 w-full text-white p-2 rounded hover:bg-blue-700 ' type='submit'>Sign In</button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SignIn