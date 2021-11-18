import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const email = user.email;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://limitless-retreat-11004.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders, email]);
    // Cancel Booking
    const handleDelete = (id) => {
        // console.log(id)
        // const proceed = window.confirm("Are you sure, you want to cancel?");
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://limitless-retreat-11004.herokuapp.com/deleteOrder/${id}`, {
                    method: "DELETE",
                    headers: { "content-type": "application/json" }

                })
                    .then((res) => res.json())
                    .then((result) => {
                        // console.log(result);
                        if (result.deletedCount) {
                            // alert("Successfully Cancelled Order");
                            Swal.fire(
                                'Cancelled!',
                                'Your order cancelled succefully.',
                                'success'
                            )
                        }
                    });
            }
        })

    }
    return (
        <div>
            <h1>My orders {orders.length}</h1> <br />
            {
                orders.map(order => <Table className="w-75 mx-auto" key={order._id} responsive>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >{order._id} </td>
                            <td >{order.name}  </td>
                            <td >{order.email}  </td>
                            <td >{order.contact}  </td>
                            <td >{order.address}  </td>
                            <td >{order.status}  </td>
                            <td > <Button onClick={() => handleDelete(order._id)} variant="danger">Cancel</Button>  </td>
                        </tr>
                    </tbody>
                </Table>)
            }

        </div>
    );
};

export default MyOrders;