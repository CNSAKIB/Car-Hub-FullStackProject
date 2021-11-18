import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [review, setReview] = useState({});
    const [rate, setRate] = useState(0);
    const history = useHistory();
    // Rating
    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[feild] = value;
        setReview(newReview);
        // console.log(feild, value);
    }
    console.log(rate);
    const handleReviewSubmit = e => {
        review.rating = rate;
        review.email = user.email;
        review.name = user.displayName;
        review.img = user.photoURL;
        console.log(review);
        fetch('https://limitless-retreat-11004.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.insertedId);
                if (result.insertedId) {
                    alert("Review Added Successfully!");
                    history.replace('/');
                }

            });
        e.preventDefault();

    }
    return (
        <div>
            <h1>Review Our Service here</h1> <br />
            <h4>Rating</h4>
            <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                onClick={setRate}
                initialRating={rate}
            /><br />
            <Form className="w-75 mx-auto">
                <Form.Group className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        disabled
                        name='name'
                        onBlur={handleOnBlur}
                        value={user?.displayName}
                        placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text"
                        name='subject'
                        onBlur={handleOnBlur}
                        placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea"
                        name='comment'
                        onBlur={handleOnBlur}
                        placeholder="Comment Here" rows={3} />
                </Form.Group>
                <br />
                <Button onClick={handleReviewSubmit} className="mt-3 text-white" variant="info">Review</Button>
            </Form>
        </div>
    );
};

export default Review;