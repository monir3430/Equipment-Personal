import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Shared/firebase.init';
import Spinner from './Spinner';



const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth).then(() => {console.log("Out")})
    }
    if(loading){
        return <Spinner></Spinner>
    }
    

    const menuItems = <>
        <li><Link to = "/home">Home</Link></li>
        <li><Link to = "/purchase">Purchase</Link></li>
        <li><Link to = "/addproduct">AddP</Link></li>
        <li>{user && <Link to = "/dashboard">Dashboard</Link>}</li>
        <li><Link to = "/blogs">Blogs</Link></li>
        <li><Link to = "/portfolio">My Portfolio</Link></li>
        
        <li>{user? <div>
            <button onClick={handleSignOut} className="btn btn-ghost">Logout</button>
            <small>{user.displayName}</small>
        </div>: <div>
        <li><Link to = "/login">Login</Link></li>
        <li><Link to = "/register">Register</Link></li>
        
        
        </div>}</li>
        
        
    </>
    return (
        <div className="navbar bg-base-100 ">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                    

                </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Equipment Personal Ltd.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
                

            </ul>
        </div>

    </div>
    );
};

export default Navbar;