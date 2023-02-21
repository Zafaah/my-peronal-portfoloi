import React from 'react'
import profile from '../Assets/prof.jpeg'
export const Home = () => {
   return (
      <div className='w-full h-screen bg-slate-400'>

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
         {/* <div className="  w-[290px] h-[500px]">
            <img src={profile} alt="profile image" />
         </div> */}
      </div>
   )
}
