import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
        // console.log(email)
    }

    const handleOnAdminSubmit = e => {
        const user = { email };
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://limitless-retreat-11004.herokuapp.com/users/admin', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.modifiedCount) {
                            setSuccess(true);
                            Swal.fire(
                                'New Admin Created Successfully!',
                                'success'
                            )
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong! No user found with this mail'
                            })
                        }
                    })
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