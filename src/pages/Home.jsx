import React from 'react'
import profile from '../Assets/prof.jpeg'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
export const Home = () => {
   return (
      <div className='w-full h-screen bg-slate-200 justify-between items-center flex'>
         <div className='  top[70%]'>
            <ul >
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-cyan-900 '>
                  <a className='flex justify-between items-center w-full  text-white  '
                     href="http://linkedin.com/in/zafaah-haaji">
                     linkedIn <FaLinkedin size={30} />
                  </a>
               </li>

            </ul>
            <ul className='h-[55px] flex top-[50%]'>
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-900 '>
                  <a className='flex justify-between items-center w-full text-white '
                     href="https://github.com/Zafaah">
                     GitHub<BsGithub size={30} />
                  </a>
               </li>

            </ul>


            <ul >
               <li className='  w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-cyan-900 '>
                  <a className='flex justify-between items-center w-full  text-white '
                     href="https://hafzaabdulkhadir@gmail.com/send">
                     Email <HiOutlineMail size={30} />
                  </a>
               </li>

            </ul>
         </div>



         <div className="max-w-[1200px] top-[50%] mx-auto  px-2 flex flex-col justify-center h-full">

            <p className='font-bold text-5xl text-red-500' >my Name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#060606]'>Hafsa Abdukadir</h1>
            <h3 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I`m Students</h3>
            <p className='text-xl' >I'm a full-stack developer with a focus on digital tech.
               <br />
               I'm concentrating on creating responsive full-stack web applications right now.
               <br />
               I picked up this ability at<h3 className='font-bold'>Jamhuriya University science and Technology.</h3>
               helps me become a web developer </p>
         </div>
         <img src={profile} className="w-[24rem] h-[30rem] rounded-tl-extraLarge rounded-bl-extraLarge 
          justify-center left-[20%]" />


      </div>
   )
}
