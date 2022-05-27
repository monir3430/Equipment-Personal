import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ManageProductTable = ({ tool, index, refetch, setToolDelete}) => {

    // const dataDelete = (id)=>{
    //     const deleteConfirmation = window.confirm('Are you sure to delete? ')
    //     if(deleteConfirmation){
    //         console.log("deleting id", id)
    //         const url = `http://localhost:5000/tools/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             if(data.deletedCount > 0){
    //                 toast.success(`${tool.name} is successfully deleted. `);
    //                 refetch();
                    
                    
    //             }

    //         })

    //     }
        
    // }
    return (
        <tr key={tool._id}>
            <th>
                {index + 1}
            </th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={tool.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{tool.name}</div>

                    </div>
                </div>
            </td>
            <td>
                {tool.available}


            </td>

            <th>
                
                <label onClick={()=>setToolDelete(tool)} htmlFor="delete-confirm-modal" class="btn modal-button btn-outline btn-error">Delete</label>
            </th>
            <ToastContainer />
            
        </tr>
    );
};

export default ManageProductTable;