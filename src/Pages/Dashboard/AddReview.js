import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from "../../Shared/firebase.init";

const AddReview = () => {
    const [user] = useAuthState(auth);
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
        <div className='mt-10 mb-10'>
                <form onSubmit={handleReview}>
                    <input type="text" placeholder="Name" disabled value={user.displayName} name='name' autoComplete='off' className="input input-bordered input-success w-full max-w-xs" required/> <br /> <br />
                    <textarea className="textarea textarea-success w-[315px]" name='comment' required  placeholder='Write something'></textarea> <br />
                    <input type="submit" value="Post Review" className="btn btn-primary mt-1" />
                    <ToastContainer />
                </form>
            </div>
    );
};

export default AddReview;