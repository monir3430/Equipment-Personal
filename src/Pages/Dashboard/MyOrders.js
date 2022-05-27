import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Shared/firebase.init';
import Spinner from '../../Shared/Spinner';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
  
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
            <td>{!order?.paid? <button class="btn btn-xs btn-outline btn-primary normal-case">Unpaid</button>:
            <button class="btn btn-xs btn-outline btn-primary normal-case"><p className='mr-3'>paid</p> and <p className='ml-3'>ID: {order.transactionId
                          }              </p></button>}</td>
            <td>{!order?.paid && <Link to = {`/dashboard/payment/${order._id}`}><button class="btn btn-xs btn-outline btn-success normal-case">Make Payment</button> </Link>} </td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>

        </div>


    );
};

export default MyOrders;