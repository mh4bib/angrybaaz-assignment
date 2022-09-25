import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Topics from './Topics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Topics></Topics>
            <Services></Services>
        </div>
    );
};

export default Home;