import React from 'react';
import spinner from "../Shared/images/spinner.gif"

const Spinner = () => {
    return (
            <div className='flex items-center justify-center '>
                <img className='w-16 h-16 border-b-2' src={spinner} alt="" />
            </div>
    );

};

export default Spinner;