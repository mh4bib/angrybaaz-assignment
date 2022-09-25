import React from 'react';
import Banner from './Banner';
import Besides from './Besides';
import Carousels from './Carousels';
import HowItWorks from './HowItWorks';
import Review from './Review';
import Services from './Services';
import Topics from './Topics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Topics></Topics>
            <Services></Services>
            <HowItWorks></HowItWorks>
            <Besides></Besides>
            <Carousels></Carousels>
            <Review></Review>
        </div>
    );
};

export default Home;