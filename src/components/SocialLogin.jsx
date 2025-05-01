import React from 'react';
import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className="space-y-3">
                <button className='btn btn-outline btn-secondary w-full'> <IoLogoGoogle size={20}/>
                Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'> <FaGithub size={20}/>
                Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;