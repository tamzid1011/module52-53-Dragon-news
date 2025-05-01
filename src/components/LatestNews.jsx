import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-base-200 flex my-5  rounded-lg p-3'>
            <p className='bg-secondary text-white px-4 py-2'>Latest</p>
            <Marquee>
            <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa dolore officiis reprehenderit, fugit aperiam, enim doloremque neque ratione, expedita qui ducimus hic et. Expedita quos assumenda non blanditiis ad velit natus delectus dignissimos harum debitis corporis eligendi amet labore omnis voluptatibus a, eum ratione deleniti porro distinctio! Earum nulla quidem error a sit illum enim blanditiis, ex ratione rerum odit voluptates architecto, suscipit possimus sunt saepe deleniti corporis soluta. Error, totam consectetur. Doloremque dolorum ipsa dolor atque at aut, sed debitis voluptates asperiores id. Laboriosam blanditiis aliquam quae optio nam nihil nobis numquam. Quia tempore deleniti quos corrupti debitis?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;