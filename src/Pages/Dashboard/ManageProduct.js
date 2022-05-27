import React from 'react';
import { useQuery } from 'react-query'
import Spinner from '../../Shared/Spinner';
import ManageProductTable from './ManageProductTable';

const ManageProduct = () => {

    const { isLoading, error, data, refetch } = useQuery('tools', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json())

    )

    if (isLoading) {
        return <Spinner></Spinner>
    }

    console.log(data)



    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>
                            SL
                        </th>

                        <th>Product Name</th>
                        <th>Stock</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {

                        data.map((tool, index) => <ManageProductTable key={tool._id} index={index} tool={tool} refetch={refetch}></ManageProductTable>)
                    }



                </tbody>


            </table>
        </div>
    );
};

export default ManageProduct;