import React from 'react';
import Banner from '../ui-section/Banner';
import Contact from '../ui-section/Contact';
import Testominal from '../ui-section/Testominal';
import PopularCourse from '../ui-section/PopularCourse';
import Footer from '../common/Footer';
import Navber from '../common/Navber';

const HomePage = () => {
    return (
        <div>
            <Navber />
            <Banner />
            <PopularCourse />
            <Testominal />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;