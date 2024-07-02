import React from 'react'
import headerImage from "/src/assets/HeaderImage 1.svg"
function Headersection() {
  return (
    <div className='px-10 py-6 flex justify-between'>
        <div className="content">
            <p className='font-extrabold text-base '>Branding | Image making</p>
            <p className='font-semibold text-[64px] pt-2 pb-1'>Visual Designer</p>
            <p className='w-[500px] text-[17px] font-normal'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
           
            <button className='capitalize text-white bg-[#2D2D2D] px-8 py-6 w-[150px] h-[70px] mt-10'>contact</button>
            </div>
        <img src={headerImage} className='w-[400px] h-[300px]' alt="" />
                  
      
    </div>
  )
}

export default Headersection