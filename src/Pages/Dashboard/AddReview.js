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
        const rating = e.target.option.value;
        console.log(name, text, rating)
        const reviews = { name, text, rating }

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
                <input type="text" placeholder="Name" disabled value={user.displayName} name='name' autoComplete='off' className="input input-bordered input-success w-full max-w-xs" required /> <br /> <br />
                <select name='option' className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled selected >Add A Rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select> <br /> <br />
                <textarea className="textarea textarea-success w-[315px]" name='comment' required placeholder='Write something'></textarea> <br />
                <input type="submit" value="Post Review" className="btn btn-primary mt-1" />
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddReview;