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
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Quantities</th>
                            <th>Price</th>
                            <th>Total Cost</th>
                            
                        </tr>
                    </thead>
                </table>
            </div>

                    <div className='overflow-x-auto'>
                        {orders.map(order => 
                            
                            <tr className="table w-full ">
                                <th></th>
                                <th>{order.productName}</th>
                                <th>{order.newOrder}</th>
                                <th>{order.price}</th>
                                <th>{order.totalCost}</th>
                                
                            </tr>
                       
                    )}
                    </div>
            </div>
            

            );
};

            export default MyOrders;