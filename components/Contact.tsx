import React from 'react'
import Social from '../components/Social'

function Contact() {
  return (
    <div className='w-full h-[350px] bg-main flex flex-col px-20 pt-[80px] space-y-2'>
      <h1 className='font-semibold text-2xl text-secondcolor ps-1'>Contact</h1>
      <h1 className='font-bold text-5xl text-black '>Get in touch</h1>
      <h1 className='font-normal text-base text-black ps-1'>muhammadmoin631@gmail.com</h1>
      <Social containerStyles='flex gap-2' iconStyles='w-10 h-10 border border-white/20 rounded-md flex justify-center items-center text-2xl text-secondcolor '/>
      <p className='pt-10 ps-1'>Copyright © 2024. Develop & Designed by Muhammad Moin</p>

    </div>
  )
}

export default Contact