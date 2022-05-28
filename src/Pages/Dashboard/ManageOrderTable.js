import React from 'react';

const ManageOrderTable = ({order, index, refetch, setModalData}) => {
    const {productName, email, paid, _id, ship} = order;
    

    return (

        <tr>
            <th>{index+1}</th>
            <td>{productName}</td>
            <td>{_id}</td>
            <td>{email}</td>
            {paid?<td>Paid</td>: <td>Not Paid</td>}
            {ship?<td>Shipped</td>: <td>Not Shipped</td>}
            {paid? <button className='btn btn-xs btn-outline btn-success'>Make Ship</button>:
            
            <label className='btn btn-xs btn-outline btn-error' onClick={()=>setModalData(order)} htmlFor="manage-order-modal">Remove</label>}
           
        </tr>
    );
};

export default ManageOrderTable;