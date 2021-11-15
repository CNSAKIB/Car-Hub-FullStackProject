import React, { useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AddNewCar = () => {
    const [carData, setCarData] = useState({});
    const history = useHistory();
    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newCarData = { ...carData };
        newCarData[feild] = value;
        setCarData(newCarData);

    }
    const handleCarSubmit = e => {
        console.log(carData);
        fetch(`http://localhost:5000/addServices`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(carData),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.insertedId);
                if (result.insertedId) {
                    alert("Inserted Successfully!");
                    history.replace('/explore');
                }
                e.preventDefault();
            });
    }
    return (
        <div>
            <h1>Add a new Car</h1> <br />
            <form className="frm w-50 mx-auto">
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Model Name"
                    className="mb-3">
                    <Form.Control
                        as="textarea"
                        name="name"
                        onBlur={handleOnBlur}
                        placeholder="Model Name" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Price"
                    className="mb-3">
                    <Form.Control
                        as="textarea"
                        name="price"
                        onBlur={handleOnBlur}
                        placeholder="Price" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea3"
                    label="Model Year"
                    className="mb-3">
                    <Form.Control
                        as="textarea"
                        name="year"
                        onBlur={handleOnBlur}
                        placeholder="Model Year" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea4"
                    label="Image URL"
                    className="mb-3">
                    <Form.Control
                        as="textarea"
                        name="img"
                        onBlur={handleOnBlur}
                        placeholder="Image URL" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea5"
                    label="Transmition"
                    className="mb-3">
                    <Form.Control
                        as="textarea"
                        name="transmition"
                        onBlur={handleOnBlur}
                        placeholder="Transmition" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea6"
                    label="Milage"
                    className="mb-3">
                    <Form.Control
                        as="textarea"
                        name="milage"
                        onBlur={handleOnBlur}
                        placeholder="Milage" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea7"
                    label="Fuel"
                    className="mb-3">
                    <Form.Control
                        as="textarea"
                        name="fuel"
                        onBlur={handleOnBlur}
                        placeholder="Fuel" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea8"
                    label="Details">
                    <Form.Control
                        as="textarea"
                        name="details"
                        onBlur={handleOnBlur} placeholder="Details"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel> <br />
                <Button onClick={handleCarSubmit} variant="success">Add This Car</Button>
            </form>
        </div>
    );
};

export default AddNewCar;