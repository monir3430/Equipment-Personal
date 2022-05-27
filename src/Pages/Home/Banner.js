import React from 'react';

const Banner = () => {
  return (

    <>
    <h1 className='text-xl text-blue-900 font-bold p-5 '>Welcome to World's No-1 Qualities Products of Personal Equipment Tools</h1>
      <div className="carousel carousel-center rounded-box m-10">

        <div className="carousel-item hidden lg:block">
          <img src="https://i.ibb.co/Rp7btJ3/banner-3.jpg" alt="tools" />
        </div>
        <div className="carousel-item hidden lg:block">
          <img src="https://i.ibb.co/W5G2fg7/banner-2.jpg" alt="tools" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/2jTnss9/Banner-4.jpg" alt="tools" />
        </div>
        <div className="carousel-item hidden lg:block">
          <img src="https://i.ibb.co/JdQCzQ7/banner-1.jpg" alt="Pizza" />
        </div>


      </div>
    </>
  );
};

export default Banner;