import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Equipment from './Equipment';
import Extra from './Extra';
import Reviews from './Reviews';




const Home = () => {
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <Equipment></Equipment>
            <BusinessSummary></BusinessSummary>
            <Extra></Extra>
            <Reviews></Reviews>
            
            
            
        </div>
    );
};

export default Home;