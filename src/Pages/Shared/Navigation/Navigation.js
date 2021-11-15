import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
import logo from '../../../images/logo.png'
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar variant="dark" className="navbar" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/home">
                    <img
                        alt=""
                        src={logo}
                        width="100"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="fw-bold fs-2 ms-3" >Car-Hub</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end w-75 mx-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
                        {user?.email && <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>}
                        {user?.email && <p className="text-white">{user?.displayName}</p>}
                        {user?.email ? <Button onClick={logout} variant="danger">Logout</Button> :
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;