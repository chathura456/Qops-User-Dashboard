import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '/public/logo.png';

const Navbar = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  return (
    <nav className={` bg-[#EAF5FC] p-4`}>
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-6">
          <div className="w-36 h-10 flex items-center">
            <Image src={logo} alt='Logo' width={200}  />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            {/* Catalog Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-black font-semibold flex items-center"
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
              >
                Catalog <span className="ml-1 text-sm">▼</span>
              </button>
              {isCatalogOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">DevOps Basics</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">Kubernetes</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">Docker</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">CI/CD</a>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-black font-semibold flex items-center"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                Resources <span className="ml-1 text-sm">▼</span>
              </button>
              {isResourcesOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">Documentation</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">Tutorials</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">Articles</a>
                </div>
              )}
            </div>

            {/* Community Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-black font-semibold flex items-center"
                onClick={() => setIsCommunityOpen(!isCommunityOpen)}
              >
                Community <span className="ml-1 text-sm">▼</span>
              </button>
              {isCommunityOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">Forums</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">Events</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">Meetups</a>
                </div>
              )}
            </div>

            {/* Other Links */}
            <a href="#" className="text-gray-700 hover:text-black font-semibold">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-black font-semibold">Career Center <span className="bg-yellow-300 text-black px-1 py-0.5 rounded text-xs">New</span></a>
            <a href="#" className="text-gray-700 hover:text-black font-semibold">For Teams</a>
          </div>
        </div>

        {/* Right Side (Log In / Sign Up) */}
        <div className="flex items-center space-x-4">
          <Link href="../../../login" className="text-gray-700 hover:text-black font-semibold">Log In</Link>
          <a href="../../../register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
