import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L47EGLNmhiWBNqV10gMo96Y2UoW5QcCrDwBvKZIlx98Hwi0TtocymnnhgutsvMhrZUOLi3vXoafV7SyU7LJQmUA00HZ5T3U3x');

const Payment = () => {
    const { id } = useParams();
    const url = `https://blooming-plateau-55758.herokuapp.com/orders/${id}`;
    const { data, isLoading, error } = useQuery(['orders', id], () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className='grid items-center justify-center'>
        <div className="card w-[500px] max-w-md bg-base-200 shadow-xl my-12">
            <div className="card-body">
                <p className="text-success font-bold">Hello, {data.userName}</p>
                <h2 className="card-title">Please Pay for {data.productName}</h2>
                
                <p>Total Payment: ${data.totalCost}</p>
            </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm data={data} />
                </Elements>
            </div>
        </div>
    </div>
       )
        
    
};

            export default Payment;