import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../Shared/firebase.init";

const Dashboard = () => {
  const [date, setDate] = useState(new Date())
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <h1 className='text-2xl text-purple-900'>Welcome to Dashboard</h1>
        <p className='text-blue-900 font-bold'>{format(date, 'PP')}</p>
        <Outlet></Outlet>


      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-3 overflow-y-auto w-[370px] bg-base-200 border text-base-content">
          {/* <!-- Sidebar content here --> */}
          {!admin && <li><Link to="/dashboard">My Orders</Link></li>}
          {!admin && <li><Link to="/dashboard/addreview"> Add A Review</Link></li>}
          <li><Link to="/dashboard/myprofile">My Profile</Link></li>
         {admin &&  <li><Link to="/dashboard/manageorder">Manage Order</Link></li>}
         {admin &&  <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>}
          {admin && <li><Link to="/dashboard/addproduct">Add A Product</Link></li>}
          {admin && <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>}

          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <DayPicker styles={{
                  caption: { 
                    color: 'blue',                    
                },
                }}
                  mode="single"
                  selected={date}
                  onSelect={setDate} />

              </div>
            </div>
          </div>


        </ul>

      </div>
    </div>
  )
};

export default Dashboard;