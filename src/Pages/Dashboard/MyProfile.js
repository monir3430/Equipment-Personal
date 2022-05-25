import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from "../../Shared/firebase.init";

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



        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset();
                toast('profile updated successfully')

            })
    }

    
    


    
    return (
        <div>
            <form onSubmit={handleProfile} className='grid gap-1 justify-center mb-10 '>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <label class="input-group">
                        
                        <input name='name' disabled value={user?.displayName} type="text" class="input input-bordered" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your Email</span>
                    </label>
                    <label class="input-group">
                        
                        <input name='email' disabled value={user?.email} type="text" class="input input-bordered" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your Last Degree</span>
                    </label>
                    <label class="input-group">
                        
                        <input name='education' value={user?.education} type="text" class="input input-bordered" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">District</span>
                    </label>
                    <label class="input-group">
                        
                        <input name='address' value={user?.address}  type="text" class="input input-bordered" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Mobile No</span>
                    </label>
                    <label class="input-group">
                        
                        <input name='mobile' value={user?.mobile}  type="text" class="input input-bordered" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">LinkedIn Link</span>
                    </label>
                    <label class="input-group">
                        
                        <input  name='linkedIn' value={user?.linkedIn}  type="url" class="input input-bordered" />
                    </label>
                </div> 
                <input type="submit" value="Submit" class="btn btn-primary" />

            </form>
        </div>
    );
};

export default MyProfile;