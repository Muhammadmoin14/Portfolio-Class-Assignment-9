import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='w-full h-[80px] bg-[#ebfeff] flex flex-row justify-between items-center px-20 fixed z-20 '>
        <div >
            <h1 className='font-Sora text-xl font-bold' >Muhammad</h1>
        </div>
        <div>
            <ul className='flex flex-row text-lg font-Sora space-x-10'>
                <Link href="#home" >    <li>Home</li>  </Link>
                <Link href="#about" >   <li>About</li> </Link>
                <Link href="#skill" >   <li>Skill</li> </Link>
                <Link href="#project" > <li>Project</li> </Link>
                <Link href="#contact" > <li>Contact</li> </Link>
            </ul>
        </div>
    </div>
  )
}

export default Header