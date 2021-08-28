import React from 'react';
import './CallToAction.css';
import Button from './Button';

function CallToAction () {
    return (
        <>
            <div className='call__to__action'>
                <div className='call__to__action__container'>
                    <div className='call__to__action__box'>
                        <h3>Want to be a part of the Bruin Polyglot Society?<br/> Join us every Monday from 2:15pm to 3:15pm on Zoom!</h3>
                        <br/>
                        <p>Click below to check out our schedule:</p>
                        <Button title='Schedule' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CallToAction;