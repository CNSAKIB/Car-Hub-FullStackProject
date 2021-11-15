import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import login from '../../images/login.jpg'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[feild] = value;
        setLoginData(newLoginData);
        // console.log(feild, value);
    }
    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Oops!Your Password Didn't Matched");
        }
        else {
            registerUser(loginData.email, loginData.password, loginData.name, history);

        }
    }
    return (
        <div>
            <div><Navigation></Navigation></div>
            <Container className="mt-4">

                <Row>
                    <Col xs={12} sm={12} md={8}>
                        <h1 className="mb-3" >Register Now!</h1>
                        {!isLoading && <form onSubmit={handleRegisterSubmit} >
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    placeholder="Name" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    placeholder="Password" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="ReType Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    placeholder="ReType Password" />
                            </FloatingLabel>
                            <Button type="submit" variant="primary">Register</Button> <br />
                        </form>} <br />
                        {isLoading && <Spinner animation="grow" />}
                        {user?.email && <Alert variant='success'>
                            Successfully Registered
                        </Alert>}
                        {authError && <Alert variant='danger'>
                            {authError}
                        </Alert>}
                        <hr />
                        <br />
                        <Link to="/login" className="my-4">Already have an account?</Link>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <img className="w-100 mx-auto" src={login} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;