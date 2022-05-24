import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner';

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
            {tools.map(tool =>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={tool.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{tool.name}</h2>
                        <p>{tool.description}</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                </div>


            )}
        </div>
    );
};

export default Purchase;