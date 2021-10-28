import React, { useEffect, useState } from "react";

const ManageServices = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch(`https://calm-atoll-54452.herokuapp.com/services`)
            .then((res) => res.json())
            .then((data) => setservices(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleDelete = (id) => {
        const url = `https://calm-atoll-54452.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = services.filter(
                        (service) => service._id !== id
                    );
                    setservices(remaining);
                }
            });
    };
    return (
        <div>
            <h2>Manage Services</h2>
            {services.map((service) => (
                <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ManageServices;
