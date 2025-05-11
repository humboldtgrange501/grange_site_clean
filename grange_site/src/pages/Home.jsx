import React from "react";
import PrimaryButton from '../components/PrimaryButton.jsx';
import { Helmet } from 'react-helmet';
import SubscribeForm from '../components/SubscribeForm.jsx';
import '../css/Home.css';
import { useEffect } from 'react';

export function Home () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
    
    return (
        <>
        <Helmet><title>Home - Humboldt Grange</title></Helmet>

            <div className="homepage-floral-welcome">
                <img src="./images/homepage_floral_accent_left.png" alt="Left floral accent" className="floral-accent left" />
                <h1 className="body-h1">Rooted in Community, Growing Together.</h1>
                <img src="./images/homepage_floral_accent_right.png" alt="Right floral accent" className="floral-accent right" />
            </div>

            <div className="homepage-welcome-text">
                <p className="p1">The Grange is a family-friendly, community-centered organization with deep roots in America's
                    agricultural heritage. Since 1867, we've brought people together to learn, lead, and serve—empowering 
                    members to make a real difference in their communities through service, education, and grassroots action.
                <br/>
                <br/>
                    Whether you're passionate about sustainable agriculture, interested in community service, or looking for a 
                    place for you or your family to connect and grow—there's a place for you at the Humboldt Grange #501.
                </p>
                <div className="homepage-welcome-text-subsection">
                    <h2>Help Us Grow Our Community</h2>
                    <p className="p2"> Grange membership is affordable, family-friendly, and full of benefits for everyone. 
                        Active members enjoy <strong><a href="/rentals" target="_blank" rel="noreferrer">discounted rental rates</a></strong> for our Grange Hall, 
                        access to <strong><a href="https://www.nationalgrange.org/our-values/benefits-to-members/" target="_blank" rel="noreferrer">National Grange benefits</a></strong>, 
                        leadership and civic engagement opportunities, and the chance to participate in social events, service projects, 
                        and lifelong learning.
                    </p>
                    <PrimaryButton to="/membership">Become a Member Today</PrimaryButton>
                </div>
                
            </div>
         {   <div className="subscribe-form-div">
                <SubscribeForm />
            </div>}
            
        </>
           
    )
}