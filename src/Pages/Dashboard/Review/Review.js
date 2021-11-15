import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Review Our Service here</h1> <br />
            <Form className="w-75 mx-auto">
                <Form.Group className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        disabled
                        value={user?.displayName}
                        placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text"
                        placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" placeholder="Comment Here" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
};

export default Review;