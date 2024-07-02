import React from 'react'
import pinkcard from '/src/assets/Skills Card Icon pink.svg'
import redcard from '/src/assets/Skills Card Icon red.svg'
import greencard from '/src/assets/Skills Card Icon green.svg'

function Cardssection() {
  return (
    <div className='flex justify-between px-10 py-6'>
        <div className=" py-16 ">
            <img className='pl-[90px] pb-5' src={pinkcard} alt="" />
            <p className='font-semibold text-[27px] text-center py-4'>Product Design</p>
            <p className='font-normal text-[17px] w-[310px] text-center'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>

        <div className=" py-16 ">
            <img className='pl-[90px] pb-5' src={redcard} alt="" />
            <p className='font-semibold text-[27px] text-center py-4'>Visual Design</p>
            <p className='font-normal text-[17px] w-[310px] text-center'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>

        <div className=" py-16 ">
            <img className='pl-[90px] pb-5' src={greencard} alt="" />
            <p className='font-semibold text-[27px] text-center py-4'>Art Design</p>
            <p className='font-normal text-[17px] w-[310px] text-center'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>

    </div>
  )
}

export default Cardssection