import React from 'react';
import Banner from '../ui-section/Banner';
import Contact from '../ui-section/Contact';
import Testominal from '../ui-section/Testominal';
import PopularCourse from '../ui-section/PopularCourse';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <PopularCourse />
            <Testominal />
            <Contact />
        </div>
    );
};

export default HomePage;