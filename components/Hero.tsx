import React from 'react'
import Image from 'next/image'
import Profile from "../public/IMG-20240114-WA0008 (1)-fotor-bg-remover-20241101165042 (1).png"

function Hero() {
  return (
    <div id='home' className='w-full h-screen bg-[#ebfeff] flex flex-row px-20 items-center '>
        <div className='w-1/2 space-y-4'>
        <h1 className='text-lg text-blue-500'>Hi Everyone, I am</h1>
        <h1 className='text-5xl font-bold'>Muhammad Moin</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi mollitia dicta provident officiis adipisci quia dignissimos neque quod sapiente deleniti.</p>
        <div className='pt-6 flex space-x-4'>
          <button className='w-[214px] h-[60px] bg-secondcolor text-white rounded-md font-semibold hover:bg-inherit hover:border-secondcolor hover:border-2 hover:text-secondcolor'>Download CV</button>
          <button className='w-[214px] h-[60px] hover:bg-secondcolor hover:text-white rounded-md font-semibold bg-inherit border-secondcolor border-2 text-secondcolor'>Explore More</button>
        </div>
        </div>
        <div className='w-1/2 flex justify-center'>
        <div className='bg-blue-500 w-[50%] h-80 rounded-lg shadow-lg items-center overflow-hidden
        '>
        <Image
        src={Profile}
        alt='Image'
        width={350}
        height={350}
        />

        
        </div>
        </div>
    </div>
  )
}

export default Hero