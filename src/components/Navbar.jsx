
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between py-4 px-10'>
        <p className='text-lg font-semibold '> Logo</p>
        < ul className='capitalize flex gap-6 text-base'>
            <li>about</li>
            <li>work</li>
            <li>contact</li>
        </ul>
    </div>
  )
}

export default Navbar