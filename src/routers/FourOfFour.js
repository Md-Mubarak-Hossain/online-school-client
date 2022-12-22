import React from 'react';
import { Link } from 'react-router-dom';

const FourOfFour = () => {
    return (
        <div>
            <h2>404</h2>
            <p>The page is not found</p>
            <p><Link to='/'>Return home</Link></p>
        </div >
    );
};

export default FourOfFour;