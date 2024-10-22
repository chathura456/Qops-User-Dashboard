"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import logo from '../../public/logo.png';
import background from '../../public/reg-background.png';
import '../ui/globals.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // For loading state
  const [success, setSuccess] = useState(false); // To display success message
  const [error, setError] = useState(''); // To display error message
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
  
    try {
      const response = await fetch('http://localhost:4000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ...formData, 
          type: 'student' 
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        setLoading(false);
        setError(result.message || 'Registration failed.');
        console.log('Error Details:', result); // Log detailed error info
      }
    } catch (err) {
      setLoading(false);
      setError('An error occurred. Please try again later.');
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        {/* Background image on the left side, flipped */}
        <div
          className="hidden md:block lg:w-3/5 bg-cover"
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: 'fill',
            backgroundPosition: 'right',
          }}
        ></div>

        {/* Form section */}
        <div className="w-full p-8 lg:w-2/5">
          <div className="flex justify-center mb-4">
            <Image src={logo} alt="Logo" width={250} />
          </div>
          <p className="text-xl text-gray-600 text-center">Create an Account</p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Username field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                required
              />
            </div>

            {/* Email field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                required
              />
            </div>

            {/* Password field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                required
              />
            </div>

            {/* Error message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Register button */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 flex justify-center"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0116 0v5.66a8 8 0 01-16 0V12z"
                    ></path>
                  </svg>
                ) : (
                  'Register'
                )}
              </button>
            </div>
          </form>

          {/* Success message */}
          {success && (
            <p className="text-green-500 text-sm mt-4 text-center">
              Registration successful! Redirecting to login...
            </p>
          )}

          {/* Link to login page */}
          <div className="mt-4 flex items-center w-full text-center">
            <Link
              href="/login"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Already have an account?
              <span className="text-blue-700"> Log In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
