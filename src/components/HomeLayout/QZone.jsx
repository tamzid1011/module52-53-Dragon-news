import React from 'react';
import swimming from "../../assets/swimming.png";
import classRoom from "../../assets/class.png";
import playGround from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-3'>Q-Zone</h2>
            <div className=" flex gap-3 flex-col justify-center">
                <img src={swimming} alt="" />
                <img src={classRoom} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default QZone;