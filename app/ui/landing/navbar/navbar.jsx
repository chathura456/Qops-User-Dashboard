import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.container} bg-[#FBECE5] p-4`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="bg-[#EBC2A6] w-16 h-10 flex items-center justify-center text-lg font-bold">LOGO</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-black">Catalog</a>
            <a href="#" className="text-gray-700 hover:text-black">Resources</a>
            <a href="#" className="text-gray-700 hover:text-black">Community</a>
            <a href="#" className="text-gray-700 hover:text-black">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-black">Career Center <span className="bg-yellow-300 text-black px-1 py-0.5 rounded text-xs">New</span></a>
            <a href="#" className="text-gray-700 hover:text-black">For Teams</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-black">Log In</a>
          <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
