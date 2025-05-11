import React from "react";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import '../css/Scholarships.css';

export function Scholarships () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    return (
        <>
            <Helmet><title>Scholarships</title></Helmet>
            <h1>Scholarship Info Coming Soon!</h1>

        </>
    )
}

export default Scholarships; 