// eslint-disable-next-line no-unused-vars
import React from 'react'

function navBar() {
  return (
    <div className='container h-14 bg-white inline-flex w-full items-center justify-between '>
      <div className='inline-flex'>
        <h1 className='text-custom-pink md:text-2xl font-extrabold lg:text-4xl'>Smile <span className='text-black md:text-2xl font-extrabold lg:text-4xl  font-ReggaeOne'>G</span>irl</h1>
      </div>
      <nav >
        <ul className='inline-flex space-x-10 font-medium md:flex hidden'>
          <li><a href="/" className=''>Home</a></li>
          <li><a href="/shop" className=''>Shop</a></li>
          <li><a href="/customize" className=''>Customize</a></li>
          <li><a href="/about" className=''>About</a></li>
          <li><a href="/contact" className=''>Contact</a></li>
        </ul>
      </nav>
      <nav className='items-end'>
        <ul className='inline-flex space-x-5 md:text-2l font-extrabold lg:text-5'>
          <li><a href="/" className=''><i className='fas fa-search'></i></a></li>
          <li><a href="/products" className=''><i className='fas fa-shopping-cart'></i></a></li>
          <li><a href="/about" className=''><i className='fas fa-heart'></i></a></li>
          <li><a href="/contact" className=''><i className='fas fa-user'></i></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default navBar
