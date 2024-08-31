/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Style from './Portfolio.module.css';
import pic1 from '../../assets/poert1.png';
import pic2 from '../../assets/port2.png';
import pic3 from '../../assets/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [pic1, pic2, pic3];

  const handleImageClick = (image) => {
    console.log('clicked')
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="portfolio">
        <div className="container text-center mt-32 mb-12 px-5">
          <h2 className="uppercase md:text-[2.5rem] text-[1.75rem]  font-[700]  text-[#2c3e50]">portfolio component</h2>

          <div className="flex justify-center items-center  mt-3">
            <div className="me-4 w-[80px] h-[4px] bg-[#2c3e50]"></div>
            <i className='fa-solid fa-star'></i>
            <div className="ms-4 w-[80px] h-[4px]  bg-[#2c3e50]"></div>
          </div>

          <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {images.map((image, index) => (
              <div key={index} className="col-span-1 rounded-xl overflow-hidden relative">
                <img
                  src={image}
                  alt={`picture ${index + 1}`}
                  className="w-full cursor-pointer"
                 
                />
                <div className="overlay absolute w-full top-0 bottom-0 bg-[#1abc9ce6] grid  place-content-center opacity-0 transition-opacity duration-[.6s] hover:opacity-100 cursor-pointer  "  onClick={() => handleImageClick(image)}>
                  <i className="fa-solid fa-plus text-8xl text-white"></i>
                </div>
              </div>
            ))}
            
            {images.map((image, index) => (
              <div key={index} className="col-span-1 rounded-xl overflow-hidden relative">
                <img
                  src={image}
                  alt={`picture ${index + 1}`}
                  className="w-full cursor-pointer"
                 
                />
                <div className="overlay absolute w-full top-0 bottom-0 bg-[#1abc9ce6] grid  place-content-center opacity-0 transition-opacity duration-[.6s] hover:opacity-100 cursor-pointer  "  onClick={() => handleImageClick(image)}>
                  <i className="fa-solid fa-plus text-8xl text-white"></i>
                </div>
              </div>
            ))}


          </div>
        </div>

        {selectedImage && (
          <div
            className="focused-pic fixed w-full top-0 bottom-0 bg-blue-700 z-50 flex justify-center items-center bg-opacity-25 " onClick={handleClose}
          >
           
              <img src={selectedImage} alt="Selected" className="w-[600px] clicked" onClick={(e) => e.stopPropagation()}/>
             
            
          </div>
        )}
      </div>
    </>
  );
}
