import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`https://limitless-retreat-11004.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [allOrders]);
    // Cancel Order
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
                                'Order has been deleted.',
                                'success'
                            )
                        }
                    });

            }
        })
    }
    //Status Approve

    const handleApprove = (id) => {
        // console.log(id)
        fetch(`https://limitless-retreat-11004.herokuapp.com/approveOrder/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" }

        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                if (result.modifiedCount) {
                    Swal.fire(
                        'Shipped!',
                        'Order status changed to shipped!',
                        'success'
                    )
                    // alert("Order Status Approved!");
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'This order is already marked Shipped!'
                    })
                }
            });
    }
    return (
        <div>
            <h1 className="my-3">Total Orders - {allOrders.length}</h1>
            {
                allOrders.map(order => <Table className="w-75 mx-auto" key={order._id} responsive>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Cancel</th>

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
                            <td > <Button onClick={() => handleApprove(order._id)} variant="success">Ship</Button>  </td>
                            <td > <Button onClick={() => handleDelete(order._id)} variant="danger">Cancel</Button>  </td>
                        </tr>
                    </tbody>
                </Table>)
            }
        </div>
    );
};

export default AllOrders;