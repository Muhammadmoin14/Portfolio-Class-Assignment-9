import React from 'react'
import Image from 'next/image'
import computerImage from '../public/computerimage.png'

function About() {
  return (
    <div id='about' className='w-full h-screen bg-white flex flex-row px-20 pt-[80px]  items-center'>
        <div className='w-1/2'>
        <Image
        src={computerImage}
        alt="Computer Image"
        width={400}
        height={400}    
        />
        </div>
        <div className='w-1/2 space-y-6 '>
            <h1 className='text-2xl text-secondcolor font-semibold'>About me</h1>
            <h1 className='text-5xl font-bold'>About me?</h1>
            <p className='text-xl font-normal text-[#455A64] pe-16
'>Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a adipiscing non aliquet. Leo semper lacus fringilla consectetur cras ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus laoreet id pulvinar id vulputate. Montes consectetur diam non aliquam nunc maecenas non. Molestie pretium amet id dictum vitae nam vel sit. Rhoncus massa velit ut amet massa morbi eget. </p>
        </div>
    </div>
  )
}

export default About