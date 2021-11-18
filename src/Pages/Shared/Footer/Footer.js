import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container mt-5 text-white">
            <Container fluid>
                <Row className="mt-5 ms-5">
                    <Col xs={12} md={6} className="mt-5">
                        <h4>Social Media:</h4>
                        <div className="footer-icons">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-youtube"></i>
                            <p className="mt-3" >Contact Us: <br />
                                Mobile: 01734567867 <br />
                                Tel- 9978-7454 <br />
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mt-5 text-white">
                        <h4>Office:</h4>
                        <p>27/A, Gulshan,Dhaka,Bangladesh</p> <br />
                        <p>For Booking: 92173298</p>
                        <p>Email:car@hub.com</p>
                    </Col>
                    <p className="text-center mt-5 pt-5">
                        &copy; All rights reserved by: Chowdhury Nazmuz Sakib
                    </p>
                </Row>

            </Container>

        </div>
    );
};

export default Footer;