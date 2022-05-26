import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../Shared/firebase.init';

const ResetForm = () => {

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef();

    const passwordReset = async () => {
        const emailForReset = emailRef.current.value;
        if (emailForReset) {
            await sendPasswordResetEmail(emailForReset);
            toast('Mail Sent');
        }
        else{
            toast('Enter a valid Email');
        }
   


    }

    const handleResetMail= e=>{
        e.preventDefault();
        // const email = e.target.email.value;
        // console.log(email);
    }
    return (

            <div className="form-control w-96 mx-auto items-center mb-[120px]">
                <label className="label">
                    <span className="label-text text-blue-900 font-bold text-[18px] mb-5">Enter A Valid Email For Reset Password</span>
                </label>
                <form onSubmit={handleResetMail} className='w-96 '>
                
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input name='email' type="email" ref={emailRef} placeholder="Enter Your Email" className="input input-bordered" />
                </label>
                
                <input type="submit" onClick={passwordReset} value="Send Mail" className="btn mt-2" />
                <ToastContainer></ToastContainer>
                </form>
                
            </div>
        
    );
};

export default ResetForm;