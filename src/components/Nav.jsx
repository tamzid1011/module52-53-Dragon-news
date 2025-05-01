import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const Nav = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className=""></div>
            <div className="flex gap-8 text-accent font-bold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-2">
                <img src={user} alt="" />
                <button className='btn btn-primary px-10 rounded-md text-center'>Login</button>
            </div>
        </div>
    );
};

export default Nav;