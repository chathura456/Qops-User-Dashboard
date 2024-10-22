'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import background from '../../public/auth-background.png';
import logo from '../../public/logo.png';
import AuthContext from '../context/AuthContext'; // Adjust the import path accordingly
import '../ui/globals.css';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  // Get login function from AuthContext
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    setLoading(true); // Start loading
    setError(''); // Clear any previous error

    try {
      const response = await fetch('http://localhost:4000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      // Use AuthContext login to save token and user data
      login(data.token, data.user);

      // Check user type and redirect accordingly
      if (data.user.type === 'student') {
        router.push('/dashboard'); // Redirect student to dashboard
      } else {
        router.push('/other-page'); // Redirect non-students to another page
      }
    } catch (error) {
      setError('Invalid email or password');
      console.error('Error during login:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div className="w-full p-8 lg:w-1/2">
          <div className="flex justify-center mb-4">
            <Image src={logo} alt="Logo" width={250} />
          </div>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          {error && (
            <p className="text-red-500 text-sm text-center my-2">{error}</p>
          )}

          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading} // Disable input during loading
            />
          </div>

          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading} // Disable input during loading
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>

          <div className="mt-8">
            <button
              onClick={handleLogin}
              className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              disabled={loading} // Disable button during loading
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  {/* Simple loading animation */}
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
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Logging in...
                </div>
              ) : (
                'Login'
              )}
            </button>
          </div>

          <div className="mt-4 flex items-center w-full text-center">
            <Link
              href="../register"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have an account yet?
              <span className="text-blue-700"> Sign Up</span>
            </Link>
          </div>
        </div>

        <div
          className="hidden md:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
