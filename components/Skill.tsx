import React from 'react'
import Image from 'next/image'
import logos from '../public/Frame 2.png'

function Skill() {
  return (
    <div id='skill' className='w-full h-1/2 bg-main items-center flex flex-col justify-center px-20 py-[80px] space-y-6 '>
        <h1 className='font-semibold text-3xl text-secondcolor '>Skills</h1>
        <h1 className='font-bold text-5xl'>What I am Capable for ?</h1>
        <Image
        src={logos}
        alt='logo'
        width={700}
        height={500}
        />
    </div>
  )
}

export default Skill