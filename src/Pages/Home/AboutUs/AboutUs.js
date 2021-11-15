import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import port from '../../../images/port.jpg'
import handshake from '../../../images/handshake.jpg'
import mechanic from '../../../images/mechanic.jpg'
import './AboutUs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
    AOS.init();
    return (
        <div>
            <h1 className="mt-4 comp-title fs-1"><u>Why Us?</u></h1>
            <Row xs={1} sm={1} md={3} className="w-75 mx-auto g-4">
                <Col>
                    <Card data-aos="zoom-in-down" className="single-card">
                        <Card.Img className="img-container" variant="top" src={mechanic} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold" >Best After-Sell Service</Card.Title>
                            <Card.Text>
                                We believe on "Customer priority first" policy.We provie you the best after self service even after thr warrenty period!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card data-aos="zoom-in-down" className="single-card">
                        <Card.Img className="img-container" variant="top" src={handshake} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold">Best Deal</Card.Title>
                            <Card.Text>
                                We provide you the best deals of all,so that you can have a wonderful experience
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card data-aos="zoom-in-down" className="single-card">
                        <Card.Img className="img-container" variant="top" src={port} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold">Live from Port</Card.Title>
                            <Card.Text>
                                You can take your car live from the port after the auction.We will do a free checkup before delivering to you
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;