import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import the Instagram icon

export const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-3xl font-extrabold text-gray-800 mb-2'>
        Follow me on Instagram
      </p>
      <p className='flex items-center justify-center text-lg font-semibold text-gray-700'>
        <a
          href='https://www.instagram.com/khaoula_rihane/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center'
        >
          <FaInstagram className='mr-2 text-3xl text-pink-500 hover:text-pink-600 transition-colors duration-300' /> {/* Instagram icon */}
        </a>
        captur
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 mt-6'>
        {/* Add your images or content here */}
      </div>
    </div>
  );
};
