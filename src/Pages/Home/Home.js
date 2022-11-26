import React from 'react';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <h1 className='mt-12 font-semibold font-sans text-3xl text-center italic text-rose-500'>
                Hello! <br /> welcome to our website and buy your favourite books online.
            </h1>
            <Slider></Slider>
        </div>
    );
};

export default Home;