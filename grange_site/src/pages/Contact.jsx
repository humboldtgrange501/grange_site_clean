import React from "react";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import '../css/Contact.css';

export function Contact () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    return (
        <>
            <Helmet><title>Contact Us</title></Helmet>
            <div className="contact-info" id="contactTop">
                <h1>Contact Us</h1>
                <p className="p2">We'd love to hear from you! <br/> 
                                 Whether you have a question about membership, events, rentals, 
                                 or just want to say hello—feel free to reach out.
                </p>

            <div style={{ marginTop: '1.5rem' }}>
                <p className="p2">
                    <strong>Phone:</strong> {''}
                    <a href="tel:7074424890">(707) 442-4890</a>
                </p>

                <p className="p2">
                    <strong>Email:</strong> {''}
                    <a href="mailto:501.humboldt.grange@gmail.com">501.humboldt.grange@gmail.com</a>
                </p>

                <div className="contact-addresses">
                    <p className="p2">
                        <strong>Visit Us:</strong>
                        <br />
                        5845 Humboldt Hill Road
                        <br />
                        Eureka, California 95503
                    </p>

                    <p className="p2">
                        <strong>Mailing Address:</strong>
                        <br />
                        P.O. Box 6264
                        <br />
                        Eureka, California 95502
                    </p>
                </div>
                
            </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: "center"}}>
                <h2>📍Find Us on the Map</h2>
                <iframe
                    title="Google Map - Humboldt Grange"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.7932753328434!2d-124.147225!3d40.747853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d16bfa840a5f4d%3A0x8c0893b772057bdd!2s5845%20Humboldt%20Hill%20Rd%2C%20Eureka%2C%20CA%2095503!5e0!3m2!1sen!2sus!4v1683823116259!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
            </div>

        </>
    )
}

export default Contact; 