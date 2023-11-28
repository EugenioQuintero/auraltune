import React, { useRef, useEffect } from 'react';
import { ImageList, ImageListItem } from '@mui/material';


const Images = () => {
  const containerRef = useRef(null);
  

  useEffect(() => {
    if (window && containerRef.current) {
      window.cloudinary.galleryWidget({
        container: containerRef.current,
        cloudName: 'dchxrai89',
        mediaAssets: [
          {
            tag: 'gallery_images',
            crop: 'fill',      
          },
        ],
        radius: 1,
        carouselLocation: 'bottom',

        thumbnailProps: { 
          width: 75, 
          height: 75, 
           
          navigationColor: "green"
        },
      }).render();
    }
  });
  return (
    <div ref={containerRef} >

    </div>
  );
};

export default Images;