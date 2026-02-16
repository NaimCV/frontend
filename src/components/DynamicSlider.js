import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Carousel, Image } from 'antd';

const DynamicSlider = ({ data }) => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  // Procesar imágenes para el formato correcto
  const processImages = (images) => {
    if (!images || !Array.isArray(images)) return [];
    
    return images.map(image => {
      if (typeof image === 'string') {
        // Es un ID de Cloudflare
        return `https://imagedelivery.net/RVD8Hi-5w-BqE-vPVWqcaw/${image}/public`;
      } else if (image.url) {
        // Es un objeto con URL
        return image.url;
      }
      return image;
    }).filter(Boolean);
  };

  const processedImages = processImages(data.images);
  
  if (processedImages.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '2rem',
        color: '#999',
        border: '2px dashed #ddd',
        borderRadius: '8px'
      }}>
        No hay imágenes para mostrar
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '32px' }}>
      <Default>
        <Slide 
          slidesToShow={data.slidesToShow || 3}
          transitionDuration={data.transitionDuration || 10000}
          duration={0}
          arrows={false}
          autoplay={data.autoplay !== false}
        >
          {processedImages.map((imageUrl, index) => (
            <div key={index} className='each-slide-effect'>
              <div style={{
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center"
              }}>
                <img 
                  alt={`slider ${index + 1}`}
                  src={imageUrl}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "600px",
                    borderRadius: "8px"
                  }}
                />
              </div>
            </div>
          ))}
        </Slide>
      </Default>
      
      <Mobile>
        <Carousel 
          effect='fade'
          autoplay={data.autoplay !== false}
          dots={false}
        >
          {processedImages.map((imageUrl, index) => (
            <div key={index}>
              <Image 
                className='imagen-responsive-center-roudend' 
                src={imageUrl}
                alt={`slider ${index + 1}`}
                style={{ borderRadius: "8px" }}
              />
            </div>
          ))}
        </Carousel>
      </Mobile>
    </div>
  );
};

export default DynamicSlider;

