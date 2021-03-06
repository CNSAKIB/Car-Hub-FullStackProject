import React, { useEffect, useState } from 'react';
import { Row, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'
import Car from '../../Explore/Car/Car';

const Services = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://limitless-retreat-11004.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCars(data);
                    setIsLoading(false);
                }
                else {
                    setIsLoading(true);
                }
            })
    }, [cars])
    return (
        <div className="">
            <h1 className="mt-4 comp-title fs-1"><u>Glimps of Cars</u></h1>
            {isLoading && <Spinner animation="grow" />}
            <Row xs={1} sm={1} md={3} className="w-75 mx-auto mt-2 mb-2 g-4">

                {cars.slice(0, 6).map(car => <Car
                    key={car._id}
                    car={car}
                ></Car>)}
            </Row>
            <Link to="/explore"><Button className="my-4 bttn-regular" variant="danger">Explore More <i class="fas fa-arrow-right"></i></Button></Link>
        </div>
    );
};

export default Services;