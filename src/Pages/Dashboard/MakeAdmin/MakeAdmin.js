import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
        // console.log(email)
    }

    const handleOnAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make a new Admin</h1> <br />
            <form className="w-75 mx-auto">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control
                        type="email"
                        required
                        onBlur={handleOnBlur}
                        placeholder="email" />
                </FloatingLabel>
                <br />
                <Button onClick={handleOnAdminSubmit} variant="danger">Make Admin</Button>
                {success && <Alert className="mt-3" variant='success'>
                    New Admin Created Successfully!
                </Alert>}
            </form>

        </div>
    );
};

export default MakeAdmin;