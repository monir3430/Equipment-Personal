import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Shared/firebase.init';
import Spinner from '../../Shared/Spinner';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    console.log(orders)
    // By fetch---------------------------------

    // useEffect(()=>{
    //     const email = user.email;
    //     fetch(`http://localhost:5000/orders?email=${email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const getOrders= data.filter(order=>order.email === email);
    //         setOrders(getOrders);
    //     })

    // }, [])

    //By Axios--------------------------------------------------

    useEffect(() => {
        const MyOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/orders?email=${email}`;
            const { data } = await axios.get(url)
            const getOrders = data.filter(order => order.email === email);
            setOrders(getOrders);
        }
        MyOrders();
    }, [])

    if (orders.length === 0) {
        return <p>No order</p>
    }
    return (
        <div className='p-3'>
           <p className='text-2xl font-bold text-green-900 pb-1'>Total My Orders = {orders.length}</p>
           <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th>SL</th>
        <th>Product Name</th>
        <th>Price/Unit</th>
        <th>Total Cost</th>
        <th>Status</th>
        <th className='pl-10'>Action</th>
      </tr>
    </thead>
    <tbody>
     {
         orders.map((order, index)=> <tr key={index}>
            <th>{index+1}</th>
            <td>{order.productName}</td>
            <td>{order.price}</td>
            <td>{order.totalCost}</td>
            <td><button class="btn btn-xs btn-outline btn-success normal-case">Unpaid</button></td>
            <p className='inline '><td><button class="btn btn-xs btn-outline btn-success normal-case">Pay</button></td><td><button class="btn btn-xs btn-outline btn-error normal-case">Cancel</button></td></p>
          </tr>)
     }
      
    </tbody>
  </table>
</div>

        </div>


    );
};

export default MyOrders;