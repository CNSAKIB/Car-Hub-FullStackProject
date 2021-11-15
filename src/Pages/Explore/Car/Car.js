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
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <Card.Text>
                        <span className="p-4"> <span className="text-primary">Price:</span> &#2547; {price} </span>
                        <span className="text-primary">Year:</span>{year}
                        <br />
                        <span className="p-4">  <span className="text-primary">Fuel:</span>{fuel}</span>
                        <span className="text-primary">Milage:</span>{milage}
                        <br />
                        <span className="mt-4">  <span className="text-primary">Transmition:</span>{transmition}</span>
                        <br />
                        <Link to={`/details/${_id}`} > <Button className="mt-3" variant="outline-primary">Book Now</Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;