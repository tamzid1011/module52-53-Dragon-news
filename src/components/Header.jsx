import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='mt-10'>
            <div className="flex justify-center flex-col items-center text-center">
                <img className='mb-4' src={logo} alt="" />
                <p className='text-lg font-medium text-accent'>Journalism Without Fear or Favour</p>
                <p className='text-accent font-semibold mt-2'>{format(new Date(),"EEEE , MMMM dd, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;