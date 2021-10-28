import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:4000/services", data).then((res) => {
            if (res.data.insertedId) {
                alert("added successfully!");
                reset();
            }
        });
        // reset({data:''});
    };

    return (
        <div className="add-service">
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="name"
                    {...register("name", {
                        required: true,
                        maxLength: 20,
                    })}
                />
                <textarea
                    placeholder="description"
                    {...register("description")}
                />
                <input
                    placeholder="price"
                    type="number"
                    {...register("price")}
                />
                <input placeholder="img-url" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
