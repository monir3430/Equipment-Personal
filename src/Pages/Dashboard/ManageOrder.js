import React from 'react';
import {useQuery} from 'react-query';
import Spinner from '../../Shared/Spinner';

const ManageOrder = () => {
    const {data: orders, isLoading, error} = useQuery('orders', ()=> fetch("http://localhost:5000/orders")
        .then(res=>res.json())
    )
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div>
           {orders.map(order=><li>{order.productName}</li>)}
        </div>
    );
};

export default ManageOrder;