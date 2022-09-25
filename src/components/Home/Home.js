import React from 'react';
import Banner from './Banner';
import Carousels from './Carousels';
import HowItWorks from './HowItWorks';
import Services from './Services';
import Topics from './Topics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Topics></Topics>
            <Services></Services>
            <HowItWorks></HowItWorks>

            <Carousels></Carousels>
        </div>
    );
};

export default Home;