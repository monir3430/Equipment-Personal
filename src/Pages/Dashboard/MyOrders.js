import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Shared/firebase.init';
import { Link } from 'react-router-dom';
import OrderDeleteModal from './OrderDeleteModal';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const [orderDelete, setOrderDelete] = useState(null);
  
    // By fetch---------------------------------

    // useEffect(()=>{
    //     const email = user.email;
    //     fetch(`https://blooming-plateau-55758.herokuapp.com/orders?email=${email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const getOrders= data.filter(order=>order.email === email);
    //         setOrders(getOrders);
    //     })

    // }, [])

    //By Axios--------------------------------------------------

    useEffect(() => {

      // order Load by email id for specific user---------------------------------
        const MyOrders = async () => {
            const email = user.email;
            const url = `https://blooming-plateau-55758.herokuapp.com/orders?email=${email}`;
            const { data } = await axios.get(url)
            const getOrders = data.filter(order => order.email === email);
            setOrders(getOrders);
        }
        MyOrders(orders);
    }, [])

    if (orders.length === 0) {
        return <p>No order</p>
    }


    
    return (
        <div className='p-3'>
           <p className='text-2xl font-bold text-green-900 pb-1'>Total My Orders = {orders.length}</p>
           <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>SL</th>
        <th>Product Name</th>
        <th>Price/Unit</th>
        <th>Total Cost</th>
        <th>Status</th>
        <th>Paid Id </th>
        <th>Remove Order</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
     {
         orders.map((order, index)=> <tr key={index}>
            <th>{index+1}</th>
            <td>{order.productName}</td>
            <td>{order.price}</td>
            <td>{order.totalCost}</td>
            <td>{!order?.paid? <button className="btn btn-xs btn-outline btn-primary normal-case">Unpaid</button>:
            <button className="btn btn-xs btn-outline btn-primary normal-case"><p className='mr-3'>paid</p> </button>}</td>
            <td>{order?.paid && <button className="btn btn-xs btn-outline btn-success normal-case">{order?.transactionId}</button>}</td>
            {!order.paid && <label onClick={()=> setOrderDelete(order)} htmlFor="order-delete-modal" className="btn btn-xs mt-4 btn-outline btn-error normal-case">Remove Order</label>}
            
            {/* <td>{!order?.paid && <button onClick={()=>deleteMyOrder(order._id)} className="btn btn-xs btn-outline btn-error normal-case">Remove</button>}</td> */}
            <td>{!order?.paid && <Link to = {`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-outline btn-success normal-case">Make Payment</button> </Link>} </td>
          </tr>)


          
     }
     
      
    </tbody>
  </table>
</div>
     {orderDelete && <OrderDeleteModal orderDelete={orderDelete} setOrderDelete={setOrderDelete} setOrders={setOrders} orders={orders}></OrderDeleteModal>}
        </div>


    );
};

export default MyOrders;