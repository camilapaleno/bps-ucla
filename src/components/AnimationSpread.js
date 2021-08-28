import React from 'react';
import './AnimationSpread.css';
import Button from './Button';

function AnimationSpread () {
    return (
        <>
            <div className='animation__spread'>
                <div className='animation__spread__container'>
                    <div className='introduction'><h3>Our team consists of driven UCLA students who are all united by one singular passion: Studying languages as a means to understand and empathize with the world around us. We are . . .</h3></div>
                    <div className='animation__spread__box'>
                        <h3>Contrarian</h3>
                        <p>Bruin Polyglot Society empathizes with students who are frustrated with their lack of progress learning languages in school. Our organization is premised upon employing a mindset that ultimately runs contrary to the status quo. Our primary goal is to revitalize language education – in a significant way.</p>
                    </div>
                    <div className='animation__spread__box'>
                        <h3>Innovative</h3>
                        <p>Our Training Program implements a multitude of unique and unorthodox techniques likely not found in a classroom setting. As dedicated language learners, BPS consistently devises methods to train our members’ brains to “think” in the target language.</p>
                    </div>
                    <div className='animation__spread__box'>
                        <h3>Efficient</h3>
                        <p>For a polyglot, time is money. BPS ensures that its members prioritize only the most commonly used vocabulary in a target language, followed by grammar rules. We also encourage our members to immerse themselves in the culture, as an engaging language-learning experience is also an efficient one.</p>
                    </div>
                    <div className='animation__spread__box'>
                        <h3>Collaborative</h3>
                        <p>Languages should be learned for the sake of learning itself, not to achieve a particular grade. Sans the usually competitive classroom environment, our members realize that, instead, helpful collaboration breeds success. Whenever a member struggles, others are readily available to assist.</p>
                    </div>
                    <div className='animation__spread__box'>
                        <h3>Selfless</h3>
                        <p>The more BPS members learn a language and the culture that is attached to it, the more open-minded they become. Our hope is that our members will use this intrinsic motivation to connect with their speakers of the target language at a deep level.</p>
                    </div>
                    <div className='animation__spread__box'>
                        <h3>Never Satisfied</h3>
                        <p>BPS may not be competitive, but we are ambitious. Due to the sheer complexity of each language, members of all levels, from beginners to experts, always work towards improving their skills. At BPS, we strive for excellence in all of our pursuits.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnimationSpread;