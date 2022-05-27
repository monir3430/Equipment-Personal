import React from 'react';
import university from "../../Shared/images/university.png";
import estate from "../../Shared/images/estate.png";
import sewing from "../../Shared/images/sewing.png";
import leed from "../../Shared/images/leed.png";
import sedex from "../../Shared/images/sedex.jpg";

const Extra = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-bold text-blue-900'>Our Sister Concerns</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-7 p-5'>
                <img src={university} alt="" />
                <img src={estate} alt="" />
                <img src={sewing} alt="" />
            </div>
            <div className='mt-7 p-5 place-content-center mx-auto '>
                <h1 className='text-3xl font-bold text-blue-900'>Compliance Accreditation</h1>
                <div className='p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                    <div className="card w-[400px] bg-base-100 shadow-xl border p-5">
                        <img className='w-[120px] h-[120px]' src={leed} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">LEED Silver certification.</h2>
                            <p>LEED certification means healthier, more productive places for us to live, learn, work and play, as well as less stress on the environment, by encouraging energy- and resource-efficient buildings. While project managers can pick and choose the credits they want to pursue, prerequisites set the minimum requirements that all buildings need to meet in order to achieve LEED certification. Additionally, fulfilling the requirements of prerequisites will not earn points. Think of them as the foundation—without it, you can’t construct a building.</p>
                            
                        </div>
                    </div>
                    <div className="card w-[400px] bg-base-100 shadow-xl border p-5">
                        <img className='w-[120px] h-[120px]' src={sedex} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">SEDEX Certification.</h2>
                            <p>SEDEX Certification SEDEX, the Supplier Ethical Data Exchange, is a not-revenue driven association situated in London, UK, open for participation to any organization anyplace on the planet. SEDEX is a participation association for organizations focused on persistent improvement of the moral execution of their supply chains.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;