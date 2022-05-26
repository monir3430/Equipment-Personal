import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const Dashboard = () => {
  const [date, setDate] = useState(new Date())
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
          <li><Link to="/dashboard">My Orders</Link></li>
          <li><Link to="/dashboard/addreview"> Add A Review</Link></li>
          <li><Link to="/dashboard/myprofile">My Profile</Link></li>
          <li><Link to="/dashboard/manageorder">Manage Order</Link></li>
          <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>
          <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
          <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>

          <div>
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
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