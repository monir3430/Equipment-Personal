import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const OrderDeleteModal = ({orderDelete, setOrderDelete, orders, setOrders}) => {
    const {_id, productName} = orderDelete;

    // data delete by id from my orders---------------------------------
    const deleteMyOrder = (id)=>{
       
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                   toast.success(`${productName} deleted from your order`);
                   const remainingOrders =orders.filter(order=>order._id !== id);
                   console.log(remainingOrders);
                   setOrders(remainingOrders);
                   setOrderDelete(null);
                    
                }
            })
  
        }
    return (
        <div>
            <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-700"> Are You Sure to Delete order of product '{productName}'</h3>
                    <div class="modal-action">
                    <button onClick={()=>deleteMyOrder(_id)} class="btn btn-xs btn-outline btn-error normal-case">Remove</button>
                        <label for="order-delete-modal" class="btn btn-xs btn-outline btn-success normal-case">Cancel</label>
                        
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default OrderDeleteModal;