import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    const handleReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const text = e.target.comment.value;
        console.log(name, text)
        const reviews = { name, text }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset();
                toast('Review Added')

            })
    }
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-bold text-blue-900'>We appreciate our business client's reviews------</h1>
            <div className='grid gap-5 justify-center '>
                {
                    reviews.map(review =>

                        <div class="card w-96 bg-base-150 shadow-xl place-content-center justify-center ">
                            <div class="card-body">
                                <h2 class="card-title text-blue-700">{review.name}</h2>
                                <p>{review.text}</p>
                                
                            </div>
                        </div>

                    )
                }
            </div>
            <div className='mt-10 mb-10'>
                <form onSubmit={handleReview}>
                    <input type="text" placeholder="Name" name='name' autoComplete='off' class="input input-bordered input-success w-full max-w-xs" required/> <br /> <br />
                    <textarea class="textarea textarea-success w-[315px]" name='comment' required  placeholder='Write something'></textarea> <br />
                    <input type="submit" value="Post Review" class="btn" />
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Reviews;