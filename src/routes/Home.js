import React from 'react';

import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <Pricing />
            <Testimonials />
            <Faq />
            <Contact />
        </div>
    )
};

export default Home;