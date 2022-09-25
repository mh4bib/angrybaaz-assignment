import React from 'react';
import Banner from './Banner';
import Carousels from './Carousels';
import Services from './Services';
import Topics from './Topics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Topics></Topics>
            <Services></Services>

            <Carousels></Carousels>
        </div>
    );
};

export default Home;