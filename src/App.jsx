import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import Home from './pages/About.jsx'
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

      <Routes>
        <Route index path='/' Component={<Home/>}/>
        <Route  path='/home' Component={<Home/>}/>
        <Route  path='/about' Component={<About/>}/>
        <Route  path='/contact' Component={<Contact/>}/>

      </Routes>


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