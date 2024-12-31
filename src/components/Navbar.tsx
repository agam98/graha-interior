import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Pastikan jalur impor untuk versi 2
import logo from '../assets/logo-web.svg'; // Pastikan path ini mengarah ke file logo Anda

const Navbar: React.FC<{ toggleTheme: () => void; isDarkMode: boolean }> = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol menu dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`p-4 shadow-md transition duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-white">
            <img src={logo} alt="Project Logo" className="h-8 w-8 mr-2" />
            <span className="text-lg font-bold">Graha Interior</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6"> {/* Menyembunyikan menu di perangkat kecil */}
          <Link to="/" className="text-white hover:text-gray-300 transition duration-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition duration-200">About</Link>
          <Link to="/services" className="text-white hover:text-gray-300 transition duration-200">Services</Link>
          <Link to="/portfolio" className="text-white hover:text-gray-300 transition duration-200">Portfolio</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition duration-200">Contact</Link>
        </div>
        {/* Tombol untuk tema dengan ikon */}
        <button 
          onClick={toggleTheme} 
          className="text-white p-2 rounded transition duration-200"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-300" />
          )}
        </button>
        {/* Tombol untuk membuka menu di perangkat kecil */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Menu dropdown untuk perangkat kecil */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-2 mt-2">
          <li><Link to="/" className="text-white hover:text-gray-300 transition duration-200">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300 transition duration-200">About</Link></li>
          <li><Link to="/services" className="text-white hover:text-gray-300 transition duration-200">Services</Link></li>
          <li><Link to="/portfolio" className="text-white hover:text-gray-300 transition duration-200">Portfolio</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-300 transition duration-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;