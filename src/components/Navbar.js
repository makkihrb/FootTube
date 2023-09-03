import React from 'react';
import { FaVideo, FaBell, FaEnvelope, FaBars } from 'react-icons/fa';
import logo from '../assets/mylogo.png';


const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button className="text-violet-500">
              <FaBars className="w-6 h-6" />
            </button>
            <a href="/" className="ml-4 ">
            <img src={logo} alt="LOGO" className="w-30 h-12 mr-2" />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500">
              <FaVideo className="w-6 h-6" />
            </button>
            <button className="text-gray-500">
              <FaBell className="w-6 h-6" />
            </button>
            <button className="text-gray-500">
              <FaEnvelope className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
