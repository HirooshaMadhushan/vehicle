import React from 'react';
import './Navigation.css';
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import Background from '../Background/Background';

function Navigation() {
  return (
    <div className="flex items-center justify-between h-16 px-8 mt-5 mb-5 bg-white bg-gradient-to-r backdrop-blur-md max-w-screen-3xl ">
      {/* Logo Section */}
      <div className='hidden md:block'>
      <div className="flex items-center text-black ">
        <img
          className="w-10 h-10 rounded-full"
          src="https://img.freepik.com/free-vector/creative-bird-logo-template_23-2148695075.jpg"
          alt="Logo"
        />
        <span className="ml-3 text-2xl font-bold">LUXED</span>
      </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <a href="/" className="text-base text-black hover:underline hover:underline-offset-8">Buy a Car</a>
        <a href="/rent" className="text-base text-black hover:underline hover:underline-offset-8">Rent Car</a>
        <a href="/finance" className="text-base text-black hover:underline hover:underline-offset-8">Financing</a>
        <a href="/about" className="text-base text-black hover:underline hover:underline-offset-8">About Us</a>
      </div>

      {/* Icon Buttons Section */}
      <div className='hidden md:block'>
      <div className="flex items-center space-x-6 text-lg text-black">
        <SearchOutlined className="cursor-pointer hover:text-green-300" />
        <HeartOutlined className="cursor-pointer hover:text-green-300" />
        <ShoppingCartOutlined className="cursor-pointer hover:text-green-300" />
        <UserOutlined className="cursor-pointer hover:text-green-300" />
      </div>
      </div>
      
    </div>
    
  );
}

export default Navigation;
