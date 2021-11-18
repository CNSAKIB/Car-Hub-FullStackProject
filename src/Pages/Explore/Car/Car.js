import React from 'react';
import './Car.css'
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Car = (props) => {
    const { _id, name, price, img, year, transmition, milage, fuel } = props.car;
    AOS.init();
    return (
        <Col>
            <Card data-aos="zoom-in-down" className="single-card">
                <Card.Img className="img-container" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="fw-bold fs-3">{name}</Card.Title>
                    <Card.Text>
                        <span className="p-4 fw-bold"> <span className="text-secondary m-2">Price:</span> &#2547; {price} </span> <br />
                        <span className="fw-bold"><span className="text-secondary">Year:</span> {year}</span>
                        <br />
                        <span className="p-4 fw-bold">  <span className="text-secondary m-2">Fuel:</span>{fuel}</span>
                        <br /><span className="fw-bold"> <span className="text-secondary">Milage:</span> {milage}</span>
                        <br />
                        <span className="mt-4 fw-bold">  <span className="text-secondary m-2">Transmition:</span>{transmition}</span>
                        <br />
                        <Link to={`/details/${_id}`} > <Button className="mt-3 book-btn" variant="danger">Book Now <i className="fas fa-arrow-right"></i></Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;