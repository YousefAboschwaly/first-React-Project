/* eslint-disable no-unused-vars */
import React from 'react'
import { useState , useEffect } from 'react';
import Style from './About.module.css'

export default function About() {

  useEffect(()=>{


  } , [])


  return (
    <>
    
  <div className="about  bg-[#1abc9c] mt-24   ">
    
  <div className="container flex flex-col justify-center items-center text-white  py-[13.5rem] px-8">

  <h2 className="uppercase md:text-[2.5rem] text-x text-[1.75rem]  font-bold ">about component</h2>

<div className="flex   justify-center items-center  my-4">
    <div className="me-4 w-[80px] h-[4px] bg-white"></div>
    <i className='fa-solid fa-star'></i>
    <div className="ms-4 w-[80px] h-[4px]  bg-white"></div>
  </div>

<div className="info flex flex-col md:flex-row   md:gap-20 gap-4">

  
<p className="">Freelancer is a free Tailwindcss theme created by Yousef. The download includes the commlete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>


<p className=" ">Freelancer is a free Tailwindcss theme created by Yousef. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>












</div>

  </div>
    </div>    
    
    </>
  )
}
