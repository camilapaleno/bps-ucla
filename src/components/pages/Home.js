import React from 'react';
import { Helmet } from 'react-helmet';
import AnimationSpread from '../AnimationSpread';
import CallToAction from '../CallToAction';
import Hero from '../Hero';
import IconSpread from '../IconSpread';


function Home () {
    return (
        <>
            <Helmet>
            </Helmet>

            <Hero />
            <AnimationSpread />
            <IconSpread />
            <CallToAction />
        </>
    );
}

export default Home;