import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 ">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Descubre Mas
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/">
                      <img src="assets/logo_no_background.png" alt="Logo" className='h-[70px] pl-7'/>
                    </a>                
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-base leading-6 text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg px-2 py-1"
                    >
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-base leading-6 text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg px-2 py-1"
                    >
                      Nuestros Servicios
                    </Link>
                  </li>
                
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Contacto
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://wa.me/+528119958639"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base leading-6 text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg px-2 py-1"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
             
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Redes Sociales
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100090307063014"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base leading-6 text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg px-2 py-1"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/auraltune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base leading-6 text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg px-2 py-1"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@auraltune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base leading-6 text-white font-semibold hover:text-gray-200 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg px-2 py-1"
                    >
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
  
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="https://wa.me/+528119958639"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition ease-in-out duration-150"
            >
              <span className="sr-only">WhatsApp</span>
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090307063014"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition ease-in-out duration-150"
            >
              <span className="sr-only">Facebook</span>
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/auraltune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition ease-in-out duration-150"
            >
              <span className="sr-only">Instagram</span>
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@auraltune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition ease-in-out duration-150"
            >
              <span className="sr-only">TikTok</span>
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            &copy; 2023 Auraltune. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
