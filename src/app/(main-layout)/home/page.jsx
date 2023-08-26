import React from 'react';
import Banner from './Banner';
import HomeMenu from './HomeMenu';
import About from '../about/About';

const Home = () => {
    return (
        <>
            <Banner/>
            <HomeMenu></HomeMenu>
            <About/>
        </>
    );
};

export default Home;