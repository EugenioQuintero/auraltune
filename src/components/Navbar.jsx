import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="bg-gray-600 shadow z-30 fixed top-0 left-0 right-0 h-[80px]">

      <div className="flex justify-between items-center px-5 text-lg">
        <div className='cursor-pointer'>
          <a href="/">
            <img src="assets/logo_no_background.png" alt="Logo" className='h-[80px] w-auto'/>
          </a>                              
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <a href="/services" className="text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg px-2 py-1">
            Nuestros Servicios
          </a>
          <a href="/about" className="text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg px-2 py-1">
            Sobre Nosotros
          </a>
        </div>

        <div className="hidden sm:flex items-center">
          <a href="https://wa.me/+528119958639" target="_blank" rel="noopener noreferrer" className="text-black bg-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg px-2 py-1">
            Contáctanos
            <span className='pl-2'>
              <i className="bi bi-whatsapp"></i>
            </span>
          </a>
        </div>

        {/* Mobile nav */}
        <div className="sm:hidden cursor-pointer" onClick={handleMenuClick}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/> 
            <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/> 
            <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {showMenu && (
        <div className="block sm:hidden bg-gray-700 bg-opacity-90 absolute inset-x-0 mt-px">
          <div className="flex flex-col py-2">
            <a href="/services" className="text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-800 rounded-lg px-3 py-2">
              Nuestros Servicios
            </a>
            <a href="/about" className="text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-800 rounded-lg px-3 py-2">
              Sobre Nosotros
            </a>
            <a href="https://wa.me/+528119958639" target="_blank" rel="noopener noreferrer" className="text-black bg-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-800 rounded-lg px-3 py-2 mt-2">
              Contáctanos
              <span className='pl-2'>
                <i className="bi bi-whatsapp"></i>
              </span>
            </a>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar;
