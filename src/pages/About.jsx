import React from 'react';

const About = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative">
        <img className="w-full h-40 object-cover" src="https://res.cloudinary.com/dchxrai89/image/upload/v1698279125/auraltune/IMG_3129_xunj7d.jpg" alt="Background" />
        <h2 className="text-4xl font-bold text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-4 bg-black bg-opacity-50 rounded-md">AURALTUNE</h2>
      </div>

      {/* Section 2 */}
      <section
        className='bg-white h-96 md:h-120 relative'
        style={{
          backgroundImage: "url('assets/background_square.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-6 max-w-md text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Auraltune ofrece servicios de DJ, renta de Audio e Iluminación Profesional
            </h2>
            <p className="text-gray-900 text-2xl mb-8 ">
              Somos una comunidad de DJs preparados para ambientar ofreciendo musica personalizada para tu evento y entretener a tus invitados.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className='bg-white h-96 md:h-120 relative overflow-hidden'
      >
  <div
    className="absolute inset-0 flex justify-center items-center m-10 mx-16"
    style={{
      backgroundImage: "url('assets/background.png')",
      backgroundSize: "150%", // Adjust the size as needed
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      animation: "scrollEffect 10s linear infinite" // Scroll animation
    }}
  >
    <div className="bg-white p-6 max-w-md text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Equipamos con sonido e iluminación profesional a tu grupo musical</h2>
      <a href='https://wa.me/+528119958639'>
        <button className="px-8 py-3 mt-6 bg-gray-600 text-white text-lg rounded hover:bg-gray-800 self-center" >Contáctanos</button>
      </a>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;
