import React from "react";
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2';
import image3 from '../../Images/image3.jpg';
import SliderImage from "./SliderImage";


const data = [
    {
      image: image1,
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: image2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: image3,
      prev: 2,
      id: 3,
      next: 1,
    }
  ];

const Slider = () => {
  return (
    <div className="carousel my-10">
    {
        data.map((sliderImage => <SliderImage key={sliderImage.id} sliderImage={sliderImage}></SliderImage>))
    }
   </div>
  );
};

export default Slider;
