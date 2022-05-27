import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import Details from './Details';

const Purchase = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    if (tools.length === 0) {
        return <Spinner></Spinner>
    }

    return (
        <div>
       <h1 className='text-2xl text-blue-900 font-bold mt-2 mb-2 p-5'>Chose Your Products & Place Bulk Order </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {tools.map(tool =>
                <div key={tool._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={tool.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{tool.name}</h2>
                        <p><b>Price:</b> ${tool.price}</p>
                        <p><b>Stock:</b> {tool.available} pcs</p>
                        <p><b>Minimum Order:</b> {tool.lot} pcs</p>
                        <div className="card-actions">
                        <Link to={`/detail/${tool._id}`}><button className='btn btn-primary '>Go to Order section</button></Link>

                        </div>
                    </div>
                </div>


            )}
        </div>
        </div>
    );
};

export default Purchase;