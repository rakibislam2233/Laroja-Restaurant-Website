import React from 'react';
import Banner from './Banner';
import HomeMenu from './HomeMenu';
import About from '../about/About';
import PopularMenu from './PopularMenu';
import OfferBanner from './OfferBanner';
import MenuBoard from './MenuBoard';
import Chef from '../chef/Chef';

const Home = () => {
    return (
        <>
            <Banner/>
            <HomeMenu/>
            <About/>
            <PopularMenu/>
            <OfferBanner/>
            <MenuBoard/>
            <Chef/>
        </>
    );
};

export default Home;