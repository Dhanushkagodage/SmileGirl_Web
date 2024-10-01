/* eslint-disable no-unused-vars */
import React from 'react'
import Image from '../../assets/1.jpg'

function Shoecard() {
  const rating = 4; // Example rating, you can adjust this value dynamically
  
  return (
    <div className='w-full p-8 '>
      <div className="grid h-fit shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"> {/* Set fixed height for the card */}
        {/* image row */}
        <div className="h-fit"> {/* 75% of the height for the image */}
          <img
            src={Image}
            alt="shoe"
            loading="lazy"
            className="object-cover w-full h-full" 
          />
        </div>
        {/* text row */}
        <div className="text-center h-fit text-[20px] font-medium text-black flex flex-col justify-center pt-3 pb-3 bg-gradient-to-b from-white to-pink-50"> {/* 25% of the height for the text */}
          <h1>Basic Braided Sliders</h1>

          {/* Review stars */}
          <div className="flex justify-center items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`text-custom-pink text-[25px] ${index < rating ? 'fill' : ''}`}>
                {index < rating ? '★' : '☆'}
              </span>
            ))}
          </div>

          <h1>Rs.2,860.00</h1>
        </div>
      </div>
    </div>
  )
}

export default Shoecard;


