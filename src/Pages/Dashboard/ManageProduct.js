import React from 'react';
import { useQuery } from 'react-query'
import Spinner from '../../Shared/Spinner';

const ManageProduct = () => {

    const { isLoading, error, data } = useQuery('tools', () =>
     fetch('http://localhost:5000/tools').then(res =>
       res.json())
      
    )
    if(isLoading){
        return <Spinner></Spinner>
    }
   


    return (
        <div>
            {
                data.map(tool=> <li>{tool.name}</li>)
            }
        </div>
    );
};

export default ManageProduct;