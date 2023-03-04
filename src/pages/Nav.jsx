import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'

import logo from '../Assets/logo.png'
import { About } from './About';


export const Nav = () => {
   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);

   return (
      <div className='fixed  shadow-md shadow-white w-full h-[80px] flex justify-between items-center px-4 bg-cyan-900 text-white ' >
         <div>
            <img src={logo} alt="logo image" style={{ width: '50px' }} />
         </div>

         <ul className='hidden md:flex'>
            <li>
               <Link to='home' smooth={true} duration={500}>
                  Home
               </Link>
            </li>
            <li>
               <Link to='about' smooth={true} duration={500}>
                  About
               </Link>
            </li>
            <li>
               <Link to='skills' smooth={true} duration={500}>
                  Skills
               </Link>
            </li>

            <li>
               <Link to='contact' smooth={true} duration={500}>
                  Contact
               </Link>
            </li>
         </ul>

         <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
         </div>

         <ul
            className={
               !nav
                  ? 'hidden'
                  : 'absolute top-0 left-0 w-[300px] h-screen bg-cyan-900 flex flex-col justify-center items-center'
            }
         >
            <li className='py-6 text-4xl'>
               {' '}
               <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                  Home
               </Link>
            </li>
            <li className='py-6 text-4xl'>
               {' '}
               <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                  About
               </Link>
            </li>
            <li className='py-6 text-4xl'>
               {' '}
               <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                  Skills
               </Link>
            </li>

            <li className='py-6 text-4xl'>
               {' '}
               <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                  Contact
               </Link>
            </li>
         </ul>

      </div >
   )
}
