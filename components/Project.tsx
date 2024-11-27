import Image from 'next/image'
import React from 'react'
import project from '../public/Screenshot 2024-11-23 231013.png'
import Link from 'next/link'

function Project() {
  return (
    <div id='project' className='w-full h-screen bg-white px-20 items-center flex flex-col justify center space-y-6 pt-[120px] '>
          <h1 className='text-2xl text-secondcolor font-semibold'>Projects</h1>
          <h1 className='text-5xl  font-bold'>What I have made?</h1>
          <div className='w-[90%] mx-auto grid lg:grid-cols-3  gap-x-12 gap-y-4 pt-8'>
          <div className='pt-1 pb-4 shadow-lg rounded-lg hover:scale-110 transition-all duration-300 scale-105'>
          <Image
          src={project}
          alt="Project"
          width={2000}
          height={2000}
          className='cursor-pointer rounded-lg'
          />
          <div className='px-3 py-3 space-y-2'>

          <h1 className='text-xl text-secondcolor font-semibold'>Portfolio Projects</h1>
          <h1 className='text-base text-black/60 font-normal'>This is a portfolio project using nextjs and tailwind css</h1>
          <div className='flex flex-row space-x-4'>

          <Link href="https://portfolio-website-moin.vercel.app/"><h1 className='text-sm font-normal hover:scale-105 hover:text-secondcolor'>Live View</h1></Link>
          <Link href="https://github.com/muhammadmoin14"><h1 className='text-sm font-normal hover:scale-105 hover:text-secondcolor'>GitHub</h1></Link>
          </div>
          </div>
          </div>
          <div className='pt-1 pb-4 shadow-lg rounded-lg hover:scale-110 transition-all duration-300 scale-105'>
          <Image
          src={project}
          alt="Project"
          width={2000}
          height={2000}
          className='cursor-pointer rounded-lg'
          />
          <div className='px-3 py-3 space-y-2'>

          <h1 className='text-xl text-secondcolor font-semibold'>Portfolio Projects</h1>
          <h1 className='text-base text-black/60 font-normal'>This is a portfolio project using nextjs and tailwind css</h1>
          <div className='flex flex-row space-x-4'>

          <Link href="https://portfolio-website-moin.vercel.app/"><h1 className='text-sm font-normal hover:scale-105 hover:text-secondcolor'>Live View</h1></Link>
          <Link href="https://github.com/muhammadmoin14"><h1 className='text-sm font-normal hover:scale-105 hover:text-secondcolor'>GitHub</h1></Link>
          </div>
          </div>
          </div>
          <div className='pt-1 pb-4 shadow-lg rounded-lg hover:scale-110 transition-all duration-300 scale-105'>
          <Image
          src={project}
          alt="Project"
          width={2000}
          height={2000}
          className='cursor-pointer rounded-lg'
          />
          <div className='px-3 py-3 space-y-2'>

          <h1 className='text-xl text-secondcolor font-semibold'>Portfolio Projects</h1>
          <h1 className='text-base text-black/60 font-normal'>This is a portfolio project using nextjs and tailwind css</h1>
          <div className='flex flex-row space-x-4'>

          <Link href="https://portfolio-website-moin.vercel.app/"><h1 className='text-sm font-normal hover:scale-105 hover:text-secondcolor'>Live View</h1></Link>
          <Link href="https://github.com/muhammadmoin14"><h1 className='text-sm font-normal hover:scale-105 hover:text-secondcolor'>GitHub</h1></Link>
          </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Project