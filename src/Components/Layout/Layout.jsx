/* eslint-disable no-unused-vars */
import React from 'react'
import { useState , useEffect } from 'react';
import { Outlet } from "react-router-dom";

import Style from './Layout.module.css'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';

export default function Layout() {

  useEffect(()=>{


  } , [])


  return (
    <>
    
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    
    </>
  )
}
