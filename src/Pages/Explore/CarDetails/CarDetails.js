import React, { useEffect, useState } from 'react';
import './CarDetails.css'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const CarDetails = () => {
    const { carId } = useParams();
    const { user } = useAuth();
    const [carDetails, setCarDetails] = useState();
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:5000/cars/${carId}`)
            .then(res => res.json())
            .then(data => setCarDetails(data));
    }, [carId])
    // Book a Car
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = "Pending";
        console.log(data)
        fetch(`http://localhost:5000/addBooking`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.insertedId);
                if (result.insertedId) {
                    alert("Booked Successfully!");
                    reset();
                    history.replace('/explore');
                }

            });
    }
    return (
        <div>
            <Navigation></Navigation>
            <h1 className="comp-title fs-1" ><u>Car Details</u></h1>
            <div>
                <img className="w-50 m-4" src={carDetails?.img} alt="" />
                <h1 className="comp-title fs-1">{carDetails?.name}</h1>
                <p className="w-50 mx-auto py-1">Price: &#2547;{carDetails?.price} </p>
                <p className="w-50 mx-auto pb-1">Transmition:{carDetails?.transmition} </p>
                <p className="w-50 mx-auto pb-1">Fuel: {carDetails?.fuel} </p>
                <p className="w-50 mx-auto pb-1">Year: {carDetails?.year} </p>
                <p className="w-50 mx-auto pb-4">Milage: {carDetails?.milage} </p>
                <p className="w-50 mx-auto pb-4">Details: <br /> {carDetails?.details}
                </p>
            </div>
            <hr />
            <div className="mt-4">
                <h1> Confirm Booking</h1> <br />
                <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue={user?.displayName} placeholder="name" {...register("name", { required: true })} /> <br />
                    <input defaultValue={user?.email} placeholder="email" {...register("email", { required: true })} /> <br />
                    <input defaultValue={carId} placeholder="OrderId" {...register("orderId", { required: true })} /> <br />
                    <input placeholder="Address" {...register("address", { required: true })} /> <br />
                    <input type="number" placeholder="Contact No." {...register("contact", { required: true })} /> <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn-danger" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default CarDetails;