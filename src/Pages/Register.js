import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from "../Shared/firebase.init"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import useToken from '../hooks/useToken';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [token] = useToken(user)
      
      if(loading || updating){
        return <Spinner></Spinner>

      }

      let loginErrorMessage;
      if(error || updateError){
       loginErrorMessage = <small className='text-red-500'>{error?.message || updateError?.message}</small>
       
        
      }
    // if (user) {
    //     console.log(updateProfile)
    // }

    if(token){
        navigate('/home')
    }
    

    const onSubmit = async data => {
        console.log(data);
        
       await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name});
        // navigate('/home')

        
       
    };
    return (
      
            <div className='flex justify-center'>
           
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-center text-bold text-2xl text-blue-900">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                               
                            })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide valid email'
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Minimum 6 Characters'
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                

                            </label>
                            
                        </div>




                                {loginErrorMessage}
                        

                        <input className='btn w-full max-w-xs btn-primary text-white' type="submit" value ='Register' />
                        
                    </form>
                    <p className='flex justify-center'><small>Already have Account? <Link to = '/login' className='text-primary font-bold'>Login</Link></small></p>
                    
                    {updateProfile}
                </div>
            </div>
            
        </div>
        
    );
};

export default Register;