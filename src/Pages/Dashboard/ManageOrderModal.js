import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ManageOrderModal = ({modalData, setModalData, refetch}) => {
 const {productName, _id} = modalData;
 
 const deleteOrderByAdmin = (id)=>{
       
    const url = `https://blooming-plateau-55758.herokuapp.com/orders/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount > 0){
            toast.success(`${productName} is successfully deleted. `);
            setModalData(null);
            refetch();
            
            
        }

    })

}

    return (
        <div>
            <input type="checkbox" id="manage-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-700 ">Are You Sure To delete Order of product "{productName}"</h3>
                    <div className="modal-action">
                    <button onClick={()=>deleteOrderByAdmin(_id)} className='btn btn-xs btn-outline btn-error'>Remove</button>
                        <label htmlFor="manage-order-modal" className="btn btn-xs btn-outline btn-success">Cancel</label>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default ManageOrderModal;