import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
  
export default function SliderHome() {
    const fadeImages = {
        carrosel_1: 'https://oliveda-photography.es/wp-content/uploads/2023/11/carrosel_1-scaled.jpg',
        carrosel_2: 'https://oliveda-photography.es/wp-content/uploads/2023/11/carrosel2-scaled.jpg',
        carrosel_3: 'https://oliveda-photography.es/wp-content/uploads/2023/11/carrosel3-scaled.jpg',
        carrosel_4: 'https://oliveda-photography.es/wp-content/uploads/2023/11/carrosel4-scaled.jpg',
        carrosel_5: 'https://oliveda-photography.es/wp-content/uploads/2023/11/carrosel5-scaled.jpg',
        carrosel_6: 'https://oliveda-photography.es/wp-content/uploads/2023/11/carrosel6-scaled.jpg',
        carrosel_7: 'https://oliveda-photography.es/wp-content/uploads/2023/11/carrosel7-scaled.jpg',
        carrosel_8: 'https://oliveda-photography.es/wp-content/uploads/2023/11/carrosel8-scaled.jpg',
    }

    return (
        <div>
            <Slide 
                // slidesToScroll={3}
                slidesToShow={3}
                transitionDuration={10000}
                duration={0}
                arrows={false}>
            {Object.keys(fadeImages).map((value) => (
                <div className='each-slide-effect'>
                    <div style={{"display": "flex", "align-items": "center", "justify-content": "center"}}>
                        <img 
                        alt="slider"
                        src={fadeImages[value]}
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