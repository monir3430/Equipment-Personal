import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Users = ({user, refetch, index}) => {
    console.log(user)
    const { email, role,} = user;
    
    
    const makeAdmin = () => {

            const url = `https://blooming-plateau-55758.herokuapp.com/user/admin/${email}`;
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
    //Delete user-------------------------------------
    const userDelete = (id)=>{
            console.log("deleting id", id)
            const url = `https://blooming-plateau-55758.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    toast.success("User deleted")
                    refetch(); 
                }
            })
    }

    return (   
            <tr>
            
            <td>{index+1}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-outline btn-success btn-xs">Make Admin</button>}</td>
            <td><button onClick={()=>userDelete(user._id)} className="btn btn-outline btn-success btn-xs">Remove User</button></td>
            <ToastContainer></ToastContainer>
        </tr>
        
       
    );
};

export default Users;