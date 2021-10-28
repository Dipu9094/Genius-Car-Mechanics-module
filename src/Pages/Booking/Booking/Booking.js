import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setservice] = useState([]);

    useEffect(() => {
        fetch(`https://calm-atoll-54452.herokuapp.com/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setservice(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <h3>{service.name}</h3>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;
