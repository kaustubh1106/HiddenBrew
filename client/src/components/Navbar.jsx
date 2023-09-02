import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import img from '../assets/log-nav.png'
import img1 from '../assets/logo-text.png'
export default function Navbar() {
  return (
    <div className='headOuter'>
      <section className='nav'>
        <img src={img} className='img-1'/>
        <img src={img1} className='img-2'/>
      </section>
      <section className='Links'>
          <Link to={"/"} className='links'> HOME </Link>
          <Link to={"/Buycoffee"} className='links'>BUY COFFEE!</Link>
          <Link to={"/Logs"} className='links'> LOGS </Link>
          <Link to={"/Message"} className='links'> MESSAGE </Link>
          <Link to={"/Aboutus"} className='links'> ABOUT US </Link>
      </section>
    </div>
  )
}
