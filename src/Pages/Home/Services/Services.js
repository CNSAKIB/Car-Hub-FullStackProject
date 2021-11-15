import React, { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Car from '../../Explore/Car/Car';

const Services = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [cars])
    return (
        <div className="">
            <h1 className="my-4">Glimps of Cars</h1>
            <Row xs={1} sm={1} md={3} className="w-75 mx-auto mt-2 mb-2 g-4">

                {cars.slice(0, 6).map(car => <Car
                    key={car._id}
                    car={car}
                ></Car>)}
            </Row>
            <Link to="/explore"><Button className="my-4" variant="primary">Explore More</Button></Link>
        </div>
    );
};

export default Services;