import React from 'react';
import { Col, Image } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import userdp from '../../../images/user.jpg'

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome to your Dashboard!</h1>

            <Col xs={12} sm={12} md={12}>
                {user.photoURL ? <Image className="mb-3" src={user.photoURL} roundedCircle /> : <Image className="w-25 mx-auto mb-3" src={userdp} roundedCircle />}
                <h3 className="text-center">Dear, {user.displayName}, <br />
                    <br />
                    Thanks for choosing CAR-HUB</h3>
                <h5>Email: {user.email}</h5> <br />
                <p>Click on the "Options" top left of your screen to see the Features</p>
            </Col>

        </div>
    );
};

export default DashboardHome;