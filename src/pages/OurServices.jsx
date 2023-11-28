import React from 'react';
import 'tailwindcss/tailwind.css';

const ServiceCard = ({ title, description, image, price }) => (
  <div className="max-w-md rounded overflow-hidden shadow-lg m-4 bg-gray-100">
    <img className="w-full" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <p className='pt-2 font-bold text-lg'>{price}</p>
    </div>
  </div>
);

const OurServices = () => {
  const DJservices = [
    { 
      title: 'DJ Plus', 
      description: '2 Altavoces, 4 proyectores LED. Capacidad para 50 personas', 
      image: 'https://res.cloudinary.com/dchxrai89/image/upload/v1700001296/auraltune/paquetes/PLUS_seme3y.png',
      price: '$800 x hora / $600 a partir de la 4ta hora'
    },
    { 
      title: 'DJ Premium', 
      description: '2 Arreglos lineales, 4 proyectores LED, 2 cabezas robóticas, 2 máquinas de humo. Capacidad para 150 personas', 
      image: 'https://res.cloudinary.com/dchxrai89/image/upload/v1700001297/auraltune/paquetes/PREMIUM_pdpqsc.png',
      price: '$1,000 x hora / $800 a partir de la 4ta hora'
    },
    { 
      title: 'DJ Deluxe', 
      description: '2 Arreglos lineales, 2 altavoces, 8 proyectores LED, 4 cabezas robóticas, 2 máquinas de humo. Capacidad para 250 personas', 
      image: 'https://res.cloudinary.com/dchxrai89/image/upload/v1700001537/auraltune/paquetes/DELUXE_l8s7ok.png',
      price: '$1,500 x hora / $1,200 a partir de la 4ta hora'
    },
    

  ];

  return (
    <>
    <div className="relative">
        <img className="w-full h-40 object-cover" src="https://res.cloudinary.com/dchxrai89/image/upload/v1700097388/IMG_3395_cm2s8q.jpg" alt="Background" />
        <h2 className="text-4xl font-bold text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-4 bg-black bg-opacity-50 rounded-md">Nuestros servicios</h2>
      </div>
    <div className="container mx-auto p-6">
      
      <div className="flex flex-wrap justify-center">
        {DJservices.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
    </>
  );
};

export default OurServices;
