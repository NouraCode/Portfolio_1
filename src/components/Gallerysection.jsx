import React from 'react'
import bloodorange from '/src/assets/Blood Orage image.svg'
import abstractdrinkimage from '/src/assets/Abstract drink image.svg'
import paperimage from '/src/assets/Paper image.svg'
import isaiah from '/src/assets/Isaiah image.svg'
import mexico from '/src/assets/mexico image.svg'
import getajobimage from '/src/assets/Get A job image.svg'



function Gallerysection() {
  return (
    <div>
        <p className='font-semibold text-center text-3xl py-6'>Latest work</p>


        <div className='flex flex-wrap gap-6 px-11'>
            <div>
                <img className='pb-6' src={bloodorange} alt="" />
                <p className='pb-2 font-semibold text-xl'>Project title</p>
                <p className='font-normal text-[17px]'>UI, Art drection</p>
            </div>

            <div>
                <img className='pb-6' src={abstractdrinkimage} alt="" />
                <p className='pb-2 font-semibold text-xl'>Project title</p>
                <p className='font-normal text-[17px]'>UI, Art drection</p>
            </div>

            <div>
                <img className='pb-6' src={paperimage} alt="" />
                <p className='pb-2 font-semibold text-xl'>Project title</p>
                <p className='font-normal text-[17px]'>UI, Art drection</p>
            </div>

            <div>
                <img className='pb-6' src={isaiah} alt="" />
                <p className='pb-2 font-semibold text-xl'>Project title</p>
                <p className='font-normal text-[17px]'>UI, Art drection</p>
            </div>

            <div>
                <img className='pb-6' src={mexico} alt="" />
                <p className='pb-2 font-semibold text-xl'>Project title</p>
                <p className='font-normal text-[17px]'>UI, Art drection</p>
            </div>

            <div>
                <img className='pb-6' src={getajobimage} alt="" />
                <p className='pb-2 font-semibold text-xl'>Project title</p>
                <p className='font-normal text-[17px]'>UI, Art drection</p>
            </div>
    </div>


    </div>
  )
}

export default Gallerysection