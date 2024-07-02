import React from 'react'

const Footer = () => {
  return (
    <div className='py-6 px-10'>
                    <p className='font-semibold text-3xl'>Lets work together</p>
        <div className="flex justify-between mr-10 mt-8">
        <div>
            <p className='w-[570px] font-normal text-[17px]'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <div className="flex gap-7 text-2xl pt-6">
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-solid fa-globe"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-behance"></i>
            </div>

        </div>

        <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
        <input type="text" name="" id="" placeholder='Name' className='bg-[#F3F3F3] w-[520px] px-6 py-4' />
        <input type="text" name="" id="" placeholder='Email' className='bg-[#F3F3F3] w-[520px] px-6 py-4' />
        </div> 
        <button className='capitalize text-white bg-[#2D2D2D] px-8 py-6 w-[150px] h-[70px]'>submit </button>
        </div>

        </div>

    </div>
  )
}

export default Footer