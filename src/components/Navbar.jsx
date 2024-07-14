// import {link} from 'react-router-dom';
import React from 'react'

function Navbar() {
  return (
    <div >
      <nav className='flex justify-between py-4 px-10'>
      <p className='text-lg font-semibold '> Logo</p>
        < ul className='capitalize flex gap-6 text-base'>
          <li>
              <link to='/'>home</link>
            </li>
            <li>
              <link to='/about'>about</link>
            </li>
            <li>
              <link to='/work'>work</link>
            </li>
            <li>
              <link to='/contact'>contact</link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar