import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://blooming-plateau-55758.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-bold text-blue-900 p-5'>We appreciate our business client's reviews------</h1>
            <div className='grid gap-5 justify-center '>
                {
                    reviews.map(review =>

                        <div key={review._id} className="card w-96 bg-base-150 shadow-xl place-content-center justify-center ">
                            <div className="card-body">
                                <h2 className="card-title text-blue-700">{review.name}</h2>
                                <p>{review.text}</p>
                                <p><b>Rating: </b>{review.rating}</p>
                                
                            </div>
                        </div>

                    )
                }
            </div>
            
        </div>
    );
};

export default Reviews;