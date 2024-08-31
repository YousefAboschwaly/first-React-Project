/* eslint-disable no-unused-vars */
import React from 'react'
import { useState , useEffect } from 'react';
import Style from './Navbar.module.css'
import { NavLink , Link } from 'react-router-dom';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`bg-[#2c3e50] border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-10  ${scrolled ? '' : 'py-4'}`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">

        <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className=" text-white font-bold text-[2rem] whitespace-nowrap dark:text-white uppercase top-nav">Start Framework
          </span>
        </Link>

        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div   
           className={`${isNavOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4   bg-transparent lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 text-white uppercase  dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">


            <li className=''>
              <NavLink to="about" className="block font-semibold text-lg px-[10px] py-[7px] text-white rounded-lg  lg:border-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">about</NavLink>
            </li>

            <li>
              <NavLink to="portfolio" className="block font-semibold text-lg  px-[10px] py-[7px]  text-white rounded-lg  lg:border-0   dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">portfolio</NavLink>
            </li>


            <li>
              <NavLink to="contact" className="block font-semibold text-lg px-[10px] py-[7px] text-white rounded-lg  lg:border-0  dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">contact</NavLink>
            </li>

           
          </ul>
        </div>
      </div>
    </nav>
  );
}