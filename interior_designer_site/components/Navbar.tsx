
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="text-2xl font-extrabold tracking-tighter">Poliform</div>
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-black transition-colors">Product</a>
        <a href="#" className="hover:text-black transition-colors">Lifestyle</a>
        <a href="#" className="hover:text-black transition-colors">News</a>
        <a href="#" className="hover:text-black transition-colors">Projects</a>
      </div>
      <button className="text-sm font-semibold px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
