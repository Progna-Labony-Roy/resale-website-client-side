import React from 'react';
import './SliderImage.css'

const SliderImage = ({sliderImage}) => {
    const { image, id, prev, next } = sliderImage;
    return (
        
        
            <div id={`sliderImage${id}`} className="carousel-item relative w-full mx-auto">
        <img className="banner-image mt-16 mx-auto" src={image} alt=''/>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#sliderImage${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#sliderImage${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
 
    );
};

export default SliderImage;