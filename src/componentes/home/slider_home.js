import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
  
export default function SliderHome() {
    const fadeImages = [
        {
            url: 'https://oliveda-photography.es/wp-content/uploads/2022/02/ELSA-47-scaled.jpg'
        },
        {
            url: 'https://oliveda-photography.es/wp-content/uploads/2022/02/EYLA-07-scaled.jpg'
        },
        {
            url: 'https://oliveda-photography.es/wp-content/uploads/2022/02/OLIVER-100-scaled.jpg'
        },
        {
            url: 'https://oliveda-photography.es/wp-content/uploads/2022/02/VEGA-24-scaled.jpg'
        },
        {
            url: 'https://oliveda-photography.es/wp-content/uploads/2022/02/SOFIA-26-scaled.jpg'
        },
        {
            url: 'https://oliveda-photography.es/wp-content/uploads/2022/02/IKER-38-scaled.jpg'
        },
        {
            url: 'https://oliveda-photography.es/wp-content/uploads/2022/02/EYLA-22-scaled.jpg'
        },
        {
            url: 'https://oliveda-photography.es/wp-content/uploads/2022/02/ADAY-02-scaled.jpg'
        }
      ];

    return (
        <div>
            <Slide 
                // slidesToScroll={3}
                slidesToShow={3}
                transitionDuration={10000}
                duration={0}
                arrows={false}>
            {fadeImages.map((image) => (
                <div className='each-slide-effect'>
                    <div style={{"display": "flex", "align-items": "center", "justify-content": "center"}}>
                        <img 
                        alt="slider"
                        src={image.url}
                        style={{
                            "maxWidth": "100%",
                            "maxHeight": "600px"
                            }}/>
                    </div>
                </div>
                ))}
            </Slide>
        </div>
      )
}