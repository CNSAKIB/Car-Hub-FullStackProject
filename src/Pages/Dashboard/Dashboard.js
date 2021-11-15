import React, { useState } from 'react';
import { Container, Navbar, Button, Offcanvas } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddNewCar from './AddNewCar/AddNewCar';
import AllOrders from './AllOrders/AllOrders';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Review from './Review/Review';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const { logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Button variant="primary" onClick={handleShow}>
                        <i className="fas fa-bars"></i> Options
                    </Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Car-Hub</Offcanvas.Title>
                        </Offcanvas.Header>
                        <hr />
                        <Offcanvas.Body className="text-center">
                            <Link to="/home"><i className="fas fa-home"></i> Home</Link> <br />
                            <Link to={`${url}/profile`} ><i className="fas fa-shopping-cart"></i> My Profile</Link> <br />
                            <Link to={`${url}/myOrders`} ><i className="fas fa-shopping-cart"></i> My Orders</Link> <br />
                            <Link to={`${url}/payment`} ><i className="fas fa-money-check-alt"></i> Payment</Link> <br />
                            <Link to={`${url}/review`} ><i className="fas fa-medal"></i> Review</Link> <br />
                            {admin && <div>
                                <hr />
                                <Link to={`${url}/makeAdmin`} ><i className="fas fa-user-shield"></i>  Make Admin</Link> <br />
                                <Link to={`${url}/allOrders`} ><i className="fas fa-cart-arrow-down"></i> All Orders</Link> <br />
                                <Link to={`${url}/addCar`} ><i className="fas fa-plus"></i> Add New Car</Link> <br />
                            </div>}

                            <hr />
                            <Button onClick={logout} variant="light">
                                <i className="fas fa-sign-out-alt"></i>  Logout
                            </Button>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Navbar.Brand className="w-75 mx-auto" href="#home">
                        Dashboard
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/profile`}  >
                    <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/payment`}>
                    <Payment></Payment>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/allOrders`}>
                    <AllOrders></AllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/addCar`}>
                    <AddNewCar></AddNewCar>
                </AdminRoute>
            </Switch>
        </div>
    );
};

export default Dashboard;