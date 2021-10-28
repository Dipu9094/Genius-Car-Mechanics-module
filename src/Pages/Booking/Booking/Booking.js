import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setservice] = useState([])

    useEffect(() => {
       
        fetch(`http://localhost:4000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setservice(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h3>{service.name}</h3>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;