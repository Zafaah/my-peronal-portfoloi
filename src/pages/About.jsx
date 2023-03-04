import React from 'react'
import dev from '../Assets/dev.jpg'
export const About = () => {
   return (
      <div name='about' className='w-full h-screen justify-between flex items-center bg-cyan-900 text-white shadow-lg shadow-cyan-50'>
         <img src={dev} className='w-[33rem] h-[30rem] justify-center rounded-tr-extraLarge
          rounded-bl-extraLarge '></img>
         <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
               <div className='sm:text-right pb-8 pl-4'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                     About
                  </p>
               </div>

            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
               <div className='sm:text-center text-4xl font-bold'>
                  <p>Hi. I'm Hafsa Abdukadir, nice to meet you. </p>
               </div>
               <div>
                  <p className=' text-4xl' >I am a student who studied web doveloper and some
                     about network and I have a diploma CNA certificate  and
                     <br />I hope to become a software developer also I am interested in learning machine learning that is my information about technology.</p>
               </div>
            </div>
         </div>
      </div>
   )
}
