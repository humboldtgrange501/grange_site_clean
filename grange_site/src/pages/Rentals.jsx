import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import '../css/Rentals.css';

export function Rentals () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
    
    return (
        <>
            <Helmet><title>Rentals</title></Helmet>
            <div className="rental-div">
            <h1 className="rental-title">Rent the Humboldt Grange</h1>

            <section className="rental-intro">
                <p className="p1"> Looking for a warm, welcoming space for your next celebration, meeting, or community gathering?
                The <strong>Humboldt Grange #501</strong> offers a charming, versatile venue available for a wide range of
                events—from parties and birthdays to fundraisers, workshops, and more.
                </p>
            </section>

            <section className="rental-contact">
                <h2>How to Reserve</h2>
                <p className="p2"> To inquire about availability or schedule a tour, please contact our Hall Manager at:<br />
                <strong> 707-442-4890</strong> <em>(Press 1 for Hall Rentals)</em>
                </p>
            </section>

            <section className="rental-rates">
                <h2>Rental Rates</h2>
                <p className="p2">
                A <strong>$50 non-refundable deposit</strong> is required to reserve your date. <br/>
                The remaining balance and insurance documentation are due <strong>2 weeks before your event</strong>.
                </p>

                <ul>
                <li><strong>$500/day</strong> - Event <em>without</em> alcohol</li>
                <li><strong>$600/day</strong> - Event <em>with</em> alcohol</li>
                <li>
                    <strong>$700/weekend</strong> - Wedding or similar event<br />
                    Includes:
                    <ul>
                    <li>Friday evening (4 hours) - Setup</li>
                    <li>Saturday - Full day event</li>
                    <li>Sunday morning (4 hours) - Cleanup</li>
                    </ul>
                </li>
                </ul>
            </section>

            <section className="rental-insurance">
                <h2>Insurance Requirements</h2>
                <p className="p2">
                All events require a <strong>$2,000,000 liability insurance policy</strong>, with the
                <strong> Humboldt Grange named as “Additionally Insured.”</strong>
                </p>
                <p className="p2">
                Many renters use sites like <a href="https://www.eventhelper.com" target="_blank" rel="noopener noreferrer">eventhelper.com</a>
                &nbsp;or their personal insurance provider. Feel free to reach out if you need guidance.
                </p>
            </section>

            <section className="rental-why">
                <h2>Why Choose the Humboldt Grange?</h2>
                <ul>
                    <li>Spacious hall with stage, kitchen, and natural light</li>
                    <li>Ample parking on-site</li>
                    <li>Flexible decorating and setup options</li>
                    <li>Friendly, local support team</li>
                </ul>
            </section>

            </div>

            
        </>
    )
}