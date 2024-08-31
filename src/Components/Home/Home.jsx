/* eslint-disable no-unused-vars */
import React from 'react'
import { useState , useEffect } from 'react';
import Style from './Home.module.css'
import logo from '../../assets/avataaars.svg'

export default function Home() {

  useEffect(()=>{


  } , [])


  return (
    <>
    
<div className="home bg-[#1abc9c] mt-24 max-h  text-white">
    <div className="container flex flex-col justify-center items-center py-24">

      <img src={logo} alt="logo img" className='w-[250px] mb-4' />
      <h2 className='uppercase md:text-[2.5rem] text-[1.75rem] font-bold '>start Framework</h2>

      <div className="flex justify-center items-center  my-4">
        <div className="me-4 w-[80px] h-[4px] bg-white"></div>
        <i className='fa-solid fa-star'></i>
        <div className="ms-4 w-[80px] h-[4px]  bg-white"></div>
      </div>

      <span className="">Graphic Artist - Web Designer - Illustrator</span>



    </div>
  
  </div>    
    
    </>
  )
}
