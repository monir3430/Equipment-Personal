import React, { useState } from 'react';
import { useQuery } from 'react-query'
import Spinner from '../../Shared/Spinner';
import DeleteModal from './DeleteModal';
import ManageProductTable from './ManageProductTable';

const ManageProduct = () => {
    const [toolDelete, setToolDelete] = useState(null);

    const { isLoading, error, data, refetch } = useQuery('tools', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json())

    )

    if (isLoading) {
        return <Spinner></Spinner>
    }




    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
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

                        data.map((tool, index) =>
                            <ManageProductTable
                                key={tool._id}
                                index={index}
                                tool={tool}
                                refetch={refetch}
                                setToolDelete={setToolDelete}
                            >

                            </ManageProductTable>)
                    }



                </tbody>


            </table>
            {toolDelete &&
                <DeleteModal
                    toolDelete={toolDelete}
                    refetch={refetch}
                    setToolDelete={setToolDelete}
                   
                >
                </DeleteModal>}
        </div>
    );
};

export default ManageProduct;