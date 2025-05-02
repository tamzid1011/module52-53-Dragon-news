import React from 'react';
import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../components/LatestNews';
import Nav from '../components/Nav';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();
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
                <aside className='col-span-3 h-fit sticky top-0'>
                    <LeftAside></LeftAside>
                </aside>
                <div className="col-span-6">
                    {state === "loading"?<Loading></Loading>:<Outlet></Outlet>}
                </div>
                <aside className='col-span-3 h-fit sticky top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;