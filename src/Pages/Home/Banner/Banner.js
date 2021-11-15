import React from 'react';
import './Banner.css'
import Navigation from '../../Shared/Navigation/Navigation';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="mb-4">
            <div className="text-white Header-container text-center">
                <div className="mb-5 pb-5">
                    <Navigation></Navigation>
                </div>
                <Container fluid>
                    <Row className="mt-5 pt-5" >
                        <Col xs={12} md={12} className="mt-5 pt-5 text-center">
                            <h1 className="mt-5 pt-5 text-danger" >Purchase <br />
                                Your Dream Car <br />
                                From Here
                            </h1>
                            <p>We provide you the best cars</p>
                            <Button variant="danger">Explore</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;