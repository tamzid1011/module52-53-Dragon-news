import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Nav from '../components/Nav';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Nav></Nav>
                </nav>
            </header>
            <main className='grid grid-cols-12 mt-10 gap-10'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <div className="col-span-6">
                    <Outlet></Outlet>
                </div>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;