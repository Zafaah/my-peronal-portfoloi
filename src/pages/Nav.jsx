import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { FaBars, FaLinkedin, FaTimes } from 'react-icons/fa'
import { HiOutlineInbox, HiOutlineMail, HiOutLineMail } from 'react-icons/hi'
import { BsFillPersonaLinesFill, BsGithub } from 'react-icons/bs'
import logo from '../Assets/logo.png'
import { EmailJSResponseStatus } from 'emailjs-com'

export const Nav = () => {
   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);
   return (
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-cyan-900 text-white ' >
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

         <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  bg-cyan-900 flex flex-col justify-center'} >
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Contact</li>
         </ul>
         <div className='flex fixed top-[30%] left-0'>
            <ul >
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-cyan-900 '>
                  <a className='flex justify-between items-center w-full  text-white  '
                     href="/">
                     linkedIn <FaLinkedin size={30} />
                  </a>
               </li>

            </ul>
         </div>
         <div className='flex fixed top-[37%] left-0'>

            <ul >
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-900 '>
                  <a className='flex justify-between items-center w-full text-white '
                     href="/https://github.com/Zafaah">
                     GitHub<BsGithub size={30} />
                  </a>
               </li>

            </ul>
         </div>
         <div className='flex fixed top-[45%] left-0'>
            <ul >
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-cyan-900 '>
                  <a className='flex justify-between items-center w-full  text-white '
                     href="/">
                     Email<HiOutlineMail size={30} />
                  </a>
               </li>

            </ul>
         </div>

      </div >
   )
}
