import React from 'react';
import bg from "../../Shared/images/bg.png"
import country from "../../Shared/images/country.png"
import Project from "../../Shared/images/project.png"
import feed from "../../Shared/images/feed.png"
import client from "../../Shared/images/client.jpg"


const BusinessSummary = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <h1 className='text-3xl font-bold text-blue-900'>No Compromise of Quality </h1>
            <h1 className='2xl font-bold text-blue-500'>Look the overview of the Company current  Status</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 p-5'>
                <img src={Project} alt="" />
                <img src={country} alt="" />
                <img src={feed} alt="" />
                <img src={client} alt="" />
                
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-5 w-[80%] h-[250px] place-content-center mx-auto border'>
                <div className=''>
                    <h1 className='text-2xl font-bold text-blue-900'>Have a Request of any product or complain</h1>
                    <h3 className='text-xl font-bold text-blue-500'>Don't hesitate to contact us</h3>
                </div>
                <div>
                <button className="btn btn-primary">Request for Quote</button>
                <button className="btn ml-2 ">Contact Us</button>
                </div>
            </div>
            
        </div>
    );
};

export default BusinessSummary;