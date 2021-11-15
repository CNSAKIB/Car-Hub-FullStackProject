import React from 'react';
import './Banner.css'
import Navigation from '../../Shared/Navigation/Navigation';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                            <h1 className="mt-5 pt-5 fw-bold" ><span className="text-danger">Purchase</span> <br />
                                Your Dream Car <br />
                                <span className="text-danger"> From Here</span>
                            </h1>
                            <p>We provide you the best cars</p>
                            <Link to='/explore'><Button className="px-4 py-2 btn-regular" variant="danger">Explore  <i class="fas fa-arrow-right"></i></Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;