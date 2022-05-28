import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from "../../Shared/firebase.init";
import 'react-toastify/dist/ReactToastify.css';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    

    const handleProfile = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const education = e.target.education.value;
        const address = e.target.address.value;
        const mobile = e.target.mobile.value;
        const linkedIn = e.target.linkedIn.value;
        console.log(name, email, education, address, mobile, linkedIn)
        const profile = {name, email, education, address, mobile, linkedIn}



        // fetch('http://localhost:5000/profile', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(profile)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         e.target.reset();
        //         toast('profile updated successfully')

        //     })


        const url = `http://localhost:5000/profile/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset();
                toast("Profile Updated Successfully")

            })
    }

    
    


    
    return (
        <div>
            <form onSubmit={handleProfile} className='grid gap-1 justify-center mb-10 '>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='name' disabled value={user?.displayName} type="text" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='email' disabled value={user?.email} type="text" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Last Degree</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='education' value={user?.education} type="text" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">District</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='address' value={user?.address}  type="text" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Mobile No</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='mobile' value={user?.mobile}  type="text" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn Link</span>
                    </label>
                    <label className="input-group">
                        
                        <input  name='linkedIn' value={user?.linkedIn}  type="url" className="input input-bordered" />
                    </label>
                </div> 
                <input type="submit" value="Submit" className="btn btn-primary" />

            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyProfile;