import React, { useState } from 'react';
import {useQuery} from 'react-query';
import Spinner from '../../Shared/Spinner';
import ManageOrderModal from './ManageOrderModal';
import ManageOrderTable from './ManageOrderTable';

const ManageOrder = () => {
  const [modalData, setModalData] = useState(null);
    const {data: orders, isLoading, error, refetch} = useQuery('orders', ()=> fetch("http://localhost:5000/orders")
        .then(res=>res.json())
    )
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
<div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>SL</th> 
        <th>Product</th> 
        <th>ID</th> 
        <th>Order Owner</th> 
        <th>PMT Status</th> 
        <th>Ship Status</th> 
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>
      
      {orders.map((order, index)=><ManageOrderTable key={order._id} index={index} order={order} refetch={refetch} setModalData={setModalData}></ManageOrderTable>)}
    </tbody> 
  </table>
      {modalData && <ManageOrderModal modalData={modalData} refetch={refetch} setModalData={setModalData}></ManageOrderModal>}
</div>
    );
};

export default ManageOrder;