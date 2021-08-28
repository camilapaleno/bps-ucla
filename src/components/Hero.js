import React from 'react';
import Button from './Button';
import Grass from '../img/grass.svg';
import Bear from '../img/bear.png';
import Tree1 from '../img/tree_1.png';
import Tree2 from '../img/tree_2.png';
import Tree3 from '../img/tree_3.png';
import People1 from '../img/p_1.png';
import People2 from '../img/p_2.png';
import Cloud from '../img/cloud.png';

import './Hero.css';

function Hero () {
    return (
        <>
            <div className='hero'>
                <div className='cloud'>
                    <img src={Cloud} alt=''/>
                    <img src={Cloud} alt=''/>
                </div>
                <div className='hero-container'>
                    <img className='bear' src={Bear} />
                    <h1><span>Bruin</span> Polyglot Society</h1>
                    <h3>UCLA's Premier Language Learning Organization</h3>
                    <Button title='What We Do'/>
                </div>
                <div className='hero-items'>
                    <div>
                        <img src={Tree1}/><img src={Tree2}/>
                        <img src={People1}/>                        
                    </div>
                    <div>
                        <img src={People2}/>
                        <img src={Tree3}/>                        
                    </div>
                </div>
                <div className='hero-bottom'>
                    <img src={Grass} alt=''/>
                </div>
            </div>
        </>
    );
}

export default Hero;