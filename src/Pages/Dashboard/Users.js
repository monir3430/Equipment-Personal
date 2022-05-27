import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Users = (user,refetch) => {
    const { email, role} = user.user;
    
    
    const makeAdmin = () => {
        const url = `http://localhost:5000/user/admin/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data=>{
                refetch();
               
            })
            toast.success("User is now an admin")
            
           
            
            

            


    }

    return (


      
            <tr>
            
            <td>{user.index+1}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-outline btn-success btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-outline btn-success btn-xs">Remove User</button></td>
            <ToastContainer></ToastContainer>
        </tr>
        
       
    );
};

export default Users;