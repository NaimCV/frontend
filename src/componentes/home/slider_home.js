import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
  
export default function SliderHome() {
    const importImages = require.context('/src/images/slider', false, /\.(png|jpe?g|svg)$/);

    const images = importImages.keys().map(importImages);

    return (
        <div>
            <Slide 
                // slidesToScroll={3}
                slidesToShow={3}
                transitionDuration={10000}
                duration={0}
                arrows={false}>
            {Object.keys(images).map((value) => (
                <div className='each-slide-effect'>
                    <div style={{"display": "flex", "align-items": "center", "justify-content": "center"}}>
                        <img 
                        alt="slider"
                        src={images[value]}
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