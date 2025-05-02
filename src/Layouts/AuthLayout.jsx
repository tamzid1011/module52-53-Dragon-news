import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <div className="w-11/12 mx-auto">
            <div className="py-8">
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;