import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [allOrders]);
    // Cancel Order
    const handleDelete = (id) => {
        // console.log(id)
        const proceed = window.confirm("Are you sure, you want to cancel?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" }

            })
                .then((res) => res.json())
                .then((result) => {
                    // console.log(result);
                    if (result.deletedCount) {
                        alert("Successfully Cancelled Order");
                    }
                });
        }
    }
    //Status Approve

    const handleApprove = (id) => {
        // console.log(id)
        fetch(`http://localhost:5000/approveOrder/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" }

        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                if (result.modifiedCount) {
                    alert("Order Status Approved!");
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
                            <td > <Button onClick={() => handleApprove(order._id)} variant="success">Approve</Button>  </td>
                            <td > <Button onClick={() => handleDelete(order._id)} variant="danger">Cancel</Button>  </td>
                        </tr>
                    </tbody>
                </Table>)
            }
        </div>
    );
};

export default AllOrders;