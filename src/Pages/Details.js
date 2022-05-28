import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../Shared/firebase.init';

const Details = () => {
    const { id } = useParams();
    const [toolDetails, setToolDetails] = useState({})
    const { name, description, img, price, available, lot } = toolDetails;
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState()
    const [cost, setCost] = useState()
    const [error, setError]= useState('')
    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setToolDetails(data));
    }, [])

    const handleOrder= e=>{
        e.preventDefault();
        const userName = e.target.name.value;
        const email = e.target.email.value;
        const newOrder = e.target.order.value;
        const price = e.target.price.value;
        const productName = e.target.tool.value;
        const totalCost = newOrder*price;
        setCost(totalCost);
        if(newOrder < lot || newOrder > available ){
            const error = `order can not be less than ${lot} or maximum ${available}`
            setError(error)
            return;
        } else{
            setError('')

        }
        console.log(userName, email, newOrder, price, productName, totalCost)

        const orders = { userName, email, productName, price,  newOrder,  totalCost}

        // order send to database---------------------------
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset();
                toast('Order successfully submitted')

            })

        //----------------------------------------------------
        

    }
    return (
        <div className='p-5'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="" />

                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-blue-900">Equipment: {name}</h2>
                    <p>{description}</p>
                    <p><b>Price:</b> ${price} per pcs</p>
                    <p><b>Stock:</b> {available} pcs</p>
                    <p><b>Minimum Order Required:</b> {lot} pcs</p>

                    <div style={{
                            background: 'Lightgrey',
                            
                            
                        }} className="card-actions justify-center mt-5 p-5">

                        <form  onSubmit={handleOrder} className='grid grid-cols-1 gap-2'>

                        <span className="label-text-alt font-bold text-[16px] text-blue-900 flex">User Name:</span>
                          <input type="text" disabled name='name' value={user?.displayName} className="input input-bordered input-sm w-full max-w-xs" /> 
                          <span className="label-text-alt font-bold text-[16px] text-blue-900 flex">User Email:</span>
                            <input type="email" disabled name='email' value={user?.email} className="input input-bordered input-sm w-full max-w-xs" />
                            <span className="label-text-alt font-bold text-[16px] text-blue-900 flex">Product's Name:</span>
                            <input type="text" name='tool' value={name} className="input input-bordered input-sm w-full max-w-xs" />
                            <span className="label-text-alt font-bold text-[16px] text-blue-900 flex">Per Unit Price:</span>
                            <input type="number" disabled name='price' value ={price}className="input input-bordered input-sm w-full max-w-xs" />
                            <span className="label-text-alt font-bold text-[16px] text-blue-900 flex">Stock:</span>
                            <input type="number" disabled name='stock' value ={available}className="input input-bordered input-sm w-full max-w-xs" />
                            <span className="label-text-alt font-bold text-[16px] text-blue-900 flex">Order Quantities:</span>
                            <input type="number" name='order'onChange={(e) => setOrder(e.target.value)} value={order || lot}  className="input input-bordered input-sm w-full max-w-xs" />
                            <span className="label-text-alt font-bold text-[16px] text-blue-900 flex">Total Cost:</span>
                            <input type="number" value={cost} className="input input-bordered input-sm w-full max-w-xs" />
                            <p> <b>NB:</b> Order can not be less than {lot} or more than {available}</p>

                           <button  className="btn btn-primary mt-3 disable "  disabled = {order > available || order < lot}>Confirm Place Now</button>
                           
                           <ToastContainer/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;