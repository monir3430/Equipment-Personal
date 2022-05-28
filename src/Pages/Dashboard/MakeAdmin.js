import React from 'react';
import { useQuery } from 'react-query'
import Spinner from '../../Shared/Spinner';
import Users from './Users';

const MakeAdmin = () => {
    const { isLoading, error, data, refetch} = useQuery('tools', () =>
        fetch('https://blooming-plateau-55758.herokuapp.com/users').then(res =>
            res.json())

    )
    

    if (isLoading) {
        return <Spinner></Spinner>
    }

   
    return (
        <div className="overflow-x-auto p-2">
        <table className="table w-full">
            <thead>
                <tr>
                    <th>sl</th>
                    <th>User Email</th>
                    <th>Make Admin</th>
                    <th>Remove User</th>
                </tr>
            </thead>
            <tbody>

                {data.map((user, index)=> <Users key={index} user={user} index = {index} refetch={refetch}></Users>)}

            </tbody>
        </table>
    </div>
    );
};

export default MakeAdmin;