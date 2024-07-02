import React from 'react'
import Navbar from './components/Navbar'
import Headersection from './components/Headersection'
import Brands from './components/Brands'
import Cardssection from './components/Cardssection'
import Gallerysection from './components/Gallerysection'
import Testimonialsection from './components/Testimonialsection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Headersection/>
      <Brands/>
      <Cardssection/>
      <Gallerysection/>
      <Testimonialsection/>
      <Footer/>

    </div>
  )
}

export default App