/* eslint-disable no-unused-vars */
import React from 'react'
import { useState , useEffect } from 'react';
import Style from './Footer.module.css'

export default function Footer() {

  useEffect(()=>{


  } , [])


  return (
    <>
    
  <footer className='text-white flex flex-col '>
 
    <div className="top  bg-[#2c3e50]">

<div className="container py-16">

        <div className="grid md:grid-cols-3 gap-20">


        <div className="col-span-1 text-center">
          <h3 className='text-[1.75rem] uppercase font-semibold'>location</h3>
          <p className='my-3'>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>


        <div className="col-span-1 text-center">
          <h3 className='text-[1.75rem] uppercase font-semibold'>AROUND THE WEB</h3>

          <div className="flex space-x-2 justify-center items-center mt-3">
  <a href="https://twitter.com" target='blank' className="w-10 h-10 rounded-full border border-white flex justify-center items-center text-white hover:bg-[#1abc9c]">

    <i className="fab fa-facebook-f"></i> 
  </a>

  <a href="https://facebook.com" target='blank' className="w-10 h-10 rounded-full border border-white flex justify-center items-center text-white hover:bg-[#1abc9c]">
    <i className="fab fa-twitter"></i> 
  </a>


  <a href="https://linkedin.com"  target='blank' className="w-10 h-10 rounded-full border border-white flex justify-center items-center text-white hover:bg-[#1abc9c]">
    <i className="fab fa-linkedin-in"></i> 
  </a>
  <a  href="https://google.com" target='blank' className="w-10 h-10 rounded-full border border-white flex justify-center items-center text-white hover:bg-[#1abc9c]">
    <i className="fas fa-globe"></i> 
  </a>
</div>

        </div>


        <div className="col-span-1 text-center">
          <h3 className='text-[1.75rem] uppercase font-semibold mb-3'>ABOUT FREELANCER</h3>
          <p className='px-12 md:px-0'>Freelance is a free to use, licensed Bootstrap theme created by Yousef Aboschwaly</p>
   
        </div>



      </div>

</div>



    </div>
    <div className="down bg-[#1a252f] p-5 text-center">
      <p>Copyright © Yousef Aboschwaly 2024</p>
    </div>


    
    </footer>    
    
    </>
  )
}
