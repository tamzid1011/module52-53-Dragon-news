import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Nav = () => {
    const { user,logOut } = use(AuthContext)
    const handleLogout = () => {
        logOut().then(() => {
            alert("You Logged out successfully")
          }).catch((error) => {
            console.log(error.message);
          });
    }
    return (
        <div className='flex items-center justify-between'>
            <div className="">{user && <p>{user.email }</p> }</div>
            <div className="flex gap-8 text-accent font-bold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-2">
                <img className='w-12 h-12 rounded-full' src={`${user?user.photoURL:userIcon}`} alt="" />
                {
                    user?<button className='btn btn-primary px-10 rounded-md text-center' onClick={handleLogout}>LogOut</button>:<Link to="/auth/login" className='btn btn-primary px-10 rounded-md text-center'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Nav;