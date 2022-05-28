import React from 'react';
import NoFond from "../Shared/images/NoFound.jpg"

const NoFound = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold mb-40 mt-10'>What You search We are not found.Please use correct keyword . 404 !!!</h1>
            <img src={NoFond} alt="" />
        </div>
    );
};

export default NoFound;