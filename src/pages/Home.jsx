import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../components/Images';

const Home = () => {
  

  return (
    <div>
      {/* Section 1 */}
      <section className="bg-gray-200 py-20 h-screen bg-auto shadow" style={{ backgroundImage: "url('https://res.cloudinary.com/dchxrai89/image/upload/v1698279001/auraltune/34370D6E-CD93-4DA8-B7B3-1E0D8B589E68IMG_3118_Edited_ebrm2m.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full">
          {/* Title */}
          <h2 className="text-6xl font-bold mb-4 text-white text-center">Feel the beat, and get on your feet</h2>
          {/* Button */}
          <a href='https://wa.me/+528119958639'>
            <button className="px-8 py-3 mt-10 bg-gray-600 text-white text-lg rounded hover:bg-gray-800 self-center" >Contáctanos</button>
          </a>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-600 py-20 h-screen flex justify-center items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-white font-bold mb-4 text-center">Somos un servicio profesional de DJ y renta de equipo de sonido e iluminacion en Monterrey.</h2>
          <h3 className="mt-10 text-2xl mb-4 text-white text-center">Nuestro objetivo es ofrecer servicios profesionales de DJ y equipo de alta fidelidad para su evento.</h3>
          <div className="flex justify-center">
            <Link to="/About">
              <button className="px-8 py-3 mt-10 bg-white text-black text-lg rounded hover:bg-gray-300 self-center">Sobre Nosotros</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card for Servicio de DJ */}
          <div className="bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow duration-300 ease-in-out p-4">
            <img src="http://res.cloudinary.com/dchxrai89/image/upload/c_scale,h_1720,w_2246/v1701131454/auraltune/paquetes/DELUXE_l8s7ok.png" alt="Servicio de DJ" className="mb-4 rounded-lg" loading='lazy'/>
            <h4 className="text-xl font-bold mb-2 text-center">Servicio de DJ</h4>
          </div>

          {/* Card for Renta de Audio Profesional */}
          <div className="bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow duration-300 ease-in-out p-4">
            <img src="assets/paquetes/pack2_no_crop.png" alt="Renta de Audio Profesional" className="mb-4 rounded-lg" loading='lazy'/>
            <h4 className="text-xl font-bold mb-2 text-center">Renta de Audio Profesional</h4>
          </div>

          {/* Card for Renta de Audio e Iluminación Profesional */}
          <div className="bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow duration-300 ease-in-out p-4">
            <img src="assets/paquetes/pack3_no_crop.png" alt="Renta de Audio e Iluminación Profesional" className="mb-4 rounded-lg " loading='lazy'/>
            <h4 className="text-xl font-bold mb-2 text-center">Renta de Audio e Iluminación Profesional</h4>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/services">
            <button className="px-8 py-3 bg-gray-600 text-white text-lg rounded hover:bg-gray-800">
              Ver todos los servicios
            </button>
          </Link>
        </div>
      </div>
    </section>

      {/* Section 4 */}
      <section>
        <div className="mx-auto px-5 bg-gray-200 mb-2">
          <h2 className="text-4xl font-bold mb-4 text-center py-5 p-6">
            Nuestro Trabajo
          </h2>
          <div className="sm:p-20">
            <Images />
          </div>        
        </div>
      </section>

    </div>
  );
};

export default Home;
