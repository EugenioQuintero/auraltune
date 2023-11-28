import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import OurServices from './pages/OurServices'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20"> {/* This padding-top should match or exceed the height of the navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<OurServices />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
