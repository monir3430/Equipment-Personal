import React, { useEffect, useState } from 'react';
import EquipTool from './EquipTool';

const Equipment = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    const newTools = tools.slice(0, 6);
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

            {
                newTools.map(tool =>

                    <div key={tool._id} className="card w-70 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={tool.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{tool.name}</h2>
                            <p>{tool.description}</p>
                            <p><b>Price:</b> ${tool.price} per pcs</p>
                            <p><b>Stock:</b> {tool.available} pcs</p>
                            <p><b>Minimum Order:</b> {tool.lot} pcs</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Purchase Now</button>
                            </div>
                        </div>
                        
                    </div>



                )


            }


        </div>
    );
};

export default Equipment;