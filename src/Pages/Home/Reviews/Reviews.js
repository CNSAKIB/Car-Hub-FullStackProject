import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    AOS.init();
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])
    return (
        <div>
            <h1 className="my-3 comp-title fs-1"><u>Customer says</u></h1>

            <Row xs={1} sm={1} md={3} className="w-75 mx-auto mt-2 mb-4 pb-5 g-4">
                {reviews.map(review =>
                    <Col>
                        <Card data-aos="zoom-in-down" className="text-center single-card">
                            <Card.Header>{review.name} <br /> Says,</Card.Header>
                            <Card.Body>
                                <Card.Title>{review.subject}</Card.Title>
                                <Card.Text>
                                    <Rating className="mb-3 fs-6 star-style"
                                        readonly
                                        initialRating={review.rating}
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                    />
                                    <p>{review.comment}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                )

                }
            </Row>
        </div>
    );
};

export default Reviews;