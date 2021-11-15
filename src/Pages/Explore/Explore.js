import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import Car from './Car/Car';

const Explore = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [cars])
    return (
        <div>
            <Navigation></Navigation>
            <h1 className="my-3 comp-title fs-1"><u>Explore from our Collection of Cars</u></h1>
            <h4>Total Cars: {cars.length}</h4>
            <Row xs={1} sm={1} md={3} className="w-75 mx-auto mt-2 mb-4 pb-5 g-4">

                {cars.map(car => <Car
                    key={car._id}
                    car={car}
                ></Car>)}
            </Row>
        </div>
    );
};

export default Explore;