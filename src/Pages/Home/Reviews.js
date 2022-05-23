import React from 'react';

const Reviews = () => {
    const handleReview = (e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleReview}>
            <input type="text" placeholder="Name" name='name' autoComplete='off' class="input input-bordered input-success w-full max-w-xs" /> <br /> <br />
            <textarea class="textarea textarea-success w-[315px]" placeholder="Comments"></textarea>
            </form>
        </div>
    );
};

export default Reviews;