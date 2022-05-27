import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ManageProductTable = ({ tool, index, refetch, setToolDelete}) => {

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