import React from 'react';
import '../App.css';

function Button (props) {
    return (
        <>
            <div className='button'>
                <div className='button-container'>
                    <h3>{props.title}</h3>
                </div>
                
            </div>
        </>
    );
}

export default Button;