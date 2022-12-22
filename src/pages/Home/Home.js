import React from 'react';
import Courses from '../courses/Courses';
import banner from '../../components/flags/banner.webp';

const Home = () => {

    return (
        <>
            <div className="hero lg:min-h-screen bgContainer">
                <div className="hero-overlay"></div>
                <img src={banner} alt="" className='lg:w-screen lg:h-screen' />
                <div className="hero-content text-center flex flex-col justify-center items-center place-items-center ">
                    <div className="lg:w-1/2 text-white">

                    </div>
                </div>
            </div>
            <Courses></Courses>
        </>
    );
};

export default Home;