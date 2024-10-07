import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import background from '../../public/reg-background.png';
import '../ui/globals.css';

const Register = () => {
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
            <Image src={logo} alt='Logo' width={250} />
          </div>
          <p className="text-xl text-gray-600 text-center">Create an Account</p>

          {/* Username field */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
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
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              required
            />
          </div>

          {/* Register button */}
          <div className="mt-8">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              Register
            </button>
          </div>

          {/* Link to login page */}
          <div className="mt-4 flex items-center w-full text-center">
            <Link
              href="../login/"
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
