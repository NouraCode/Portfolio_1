import React from 'react'
import google from '/src/assets/google logo.svg'
import nike from '/src/assets/Nike logo.svg'
import samsung from '/src/assets/Samsung logo.svg'
import apple from '/src/assets/Apple logo.svg'
import addidas from '/src/assets/Adidas logo.svg'

function Brands() {
  return (
    <div className='flex justify-between px-10 py-16 '>
        <img src={google} alt="" />
        <img src={nike} alt="" />
        <img src={samsung} alt="" />
        <img src={apple} alt="" />
        <img src={addidas} alt="" />

    </div>
  )
}

export default Brands