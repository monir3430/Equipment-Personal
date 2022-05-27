import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({toolDelete, refetch, setToolDelete}) => {
    const {_id, name} = toolDelete;

    const dataDelete = (id)=>{
       
            const url = `http://localhost:5000/tools/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    toast.success(`${name} is successfully deleted. `);
                    setToolDelete(null);
                    refetch();
                    
                    
                }

            })

        }
        
    
    return (
        <div>

            

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="text-lg text-red-700">Are You sure to delete<span className='text-blue-900 text-2xl font-bold'> product  '{name}'?</span></h3>
                    <div class="modal-action">
                    <button onClick={()=> dataDelete(_id) } htmlFor="delete-confirm-modal" class="btn btn-error btn-xs btn-outline normal-case">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs btn-outline btn-primary">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;