import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car = (props) => {
    const { _id, name, price, img, year, transmition, milage, fuel } = props.car;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className="p-4"> Price:&#2547; {price} </span>
                        Year:{year}
                        <br />
                        <span className="p-4"> Fuel:{fuel}</span>
                        Milage:{milage}
                        <br />
                        <span className="mt-4"> Transmition:{transmition}</span>
                        <br />
                        <Link to={`/details/${_id}`} > <Button className="mt-3" variant="outline-primary">Book Now</Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;