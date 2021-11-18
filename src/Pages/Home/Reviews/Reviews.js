import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loadReview, setLoadReview] = useState(true);
    AOS.init();
    useEffect(() => {
        fetch('https://limitless-retreat-11004.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setReviews(data);
                    setLoadReview(false);
                }
                else {
                    setLoadReview(true);
                }
            });

    }, [])
    return (
        <div>
            <h1 className="my-3 comp-title fs-1"><u>Customer says</u></h1>
            {loadReview && <Spinner animation="grow" />}
            <Row xs={1} sm={1} md={3} className="w-75 mx-auto mt-2 mb-4 pb-5 g-4">
                {reviews.map(review =>
                    <Col>
                        <Card data-aos="zoom-in-down" className="text-center single-card">
                            <Card.Header>{review.img ? <img className="rounded-circle" src={review.img} alt="" /> : <i className="fas fa-user-circle fs-1"></i>} <br />
                                {review.name} <br /> </Card.Header>
                            <Card.Body>
                                <Card.Title>Says, {review.subject}</Card.Title>
                                <Card.Text><br />
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