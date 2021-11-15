import React from 'react';
import './NotFound.css'
import error from '../../images/error.jpg'
import Navigation from '../Shared/Navigation/Navigation';
const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="text-center mt-5" >
                <h1>The page you are looking for is not Found!</h1>
                <img className="error-container" src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;