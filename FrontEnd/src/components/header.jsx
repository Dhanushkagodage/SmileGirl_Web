// eslint-disable-next-line no-unused-vars
import React from 'react';

function Header() {
  return (
    <div className='h-14 bg-gray-200 inline-flex w-full items-center justify-between px-10'>
      <div className=''>
        <h1 className='text-custom-pink text-4xl font-extrabold'>Smile <span className='text-black text-4xl font-extrabold font-ReggaeOne'>G</span>irl</h1>
      </div>
      <nav >
        <ul className='inline-flex space-x-10 font-medium '>
          <li><a href="/" className=''>Home</a></li>
          <li><a href="/shop" className=''>Shop</a></li>
          <li><a href="/customize" className=''>Customize</a></li>
          <li><a href="/about" className=''>About</a></li>
          <li><a href="/contact" className=''>Contact</a></li>
        </ul>
      </nav>
      <nav className='items-end'>
        <ul className='inline-flex space-x-5'>
          <li><a href="/" className=''><i className='fas fa-search'></i></a></li>
          <li><a href="/products" className=''><i className='fas fa-shopping-cart'></i></a></li>
          <li><a href="/about" className=''><i className='fas fa-heart'></i></a></li>
          <li><a href="/contact" className=''><i className='fas fa-user'></i></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;  