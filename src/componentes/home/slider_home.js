import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
  
export default function SliderHome() {    
    const path_images = 'https://imagedelivery.net/RVD8Hi-5w-BqE-vPVWqcaw/<image_id>/normal'
    const fadeImages = {
        carrosel_1: path_images.replace('<image_id>', 'e36d397f-0eb1-479b-1b32-83657882de00'),
        carrosel_2: path_images.replace('<image_id>', 'c489ad9d-cd1e-4c39-a124-2adc2ba8fb00'),
        carrosel_3: path_images.replace('<image_id>', '8e157b44-858e-45e3-1e7c-69df589c6500'),
        carrosel_4: path_images.replace('<image_id>', '303d4612-b538-4dda-e2a1-fce25770b400'),
        carrosel_5: path_images.replace('<image_id>', '965c0ce1-38bc-4e72-1227-1a53ddea1500'),
        carrosel_6: path_images.replace('<image_id>', 'fa9e7a31-e817-4a34-3d15-c3b2ee355d00'),
        carrosel_7: path_images.replace('<image_id>', 'e6662ac1-708c-4276-4bbb-e487eec0c700'),
        carrosel_8: path_images.replace('<image_id>', '4da467e3-62fa-43f2-a4ea-63adfbcd3d00'),
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