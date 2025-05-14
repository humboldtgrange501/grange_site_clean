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
                    <p className="p1"> Looking for a warm, welcoming space to host your next celebration, meeting, or community gathering?
                    The <strong>Humboldt Grange #501</strong> offers a charming, versatile venue available for a wide range of
                    events—from parties and birthdays to fundraisers, workshops, and more.
                    </p>
                </section>

                <section className="rental-spaces">
                    <h2>Main Hall</h2>
                    <p className="p2">Our main hall which has a hardwood floor is approximately 2,301 sq. ft. (59 x 39) 
                        and has a small (12 x 17) stage. <br/> The walls are lined with 46 folding theater seats.</p>
                    
                    <div className="hall-photos">
                        <img src="../images/rental/hall_one.jpg" alt="hall"/>
                        <img src="../images/rental/hall_two.jpg" alt="hall"/>
                        <img src="../images/rental/hall_three.jpg" alt="hall"/>
                    </div>



                    <h2>Kitchen</h2>
                    <p className="p2">Our kitchen has a four burner commercial stove with large griddle and two ovens, 
                        and a commercial refrigerator. {/*, dishwasher and available at an extra cost plates, cups, 
                        tableware and chafing dishes.*/} The open-concept kitchen and dining area spans 1029 sq. ft (39 x 28), 
                        offering enough space to comfortably accommodate 40 to 50 people.</p>

                    <div className="hall-photos">
                        <img src="../images/rental/kitchen_one.jpg" alt="kitchen"/>
                        <img src="../images/rental/kitchen_two.jpg" alt="kitchen"/>
                    </div>
                </section>

                <section className="rental-contact">
                    <h2>How to Reserve</h2>
                    <p className="p2"> To inquire about availability or schedule a tour, please contact our Hall Manager at:<br />
                    <strong> 707-442-4890</strong> <em>(Press 1 for Hall Rentals)</em> or email {' '}
                    <a href="mailto:rentals@humboldtgrange501.org">rentals@humboldtgrange501.org</a>
                    </p>
                </section>

                <div className="rental-div-center-text">

                <h2> Basic Rental Rates </h2>
                <p className="p2">
                    Below are our basic rental rates. Once you contact us to discuss your event we can provide an 
                    accurate cost. <br/>
                    We provide reduced rates for Grange members and Non-Profits&mdash;please  {' '}
                    <a href="/contact">contact us</a> for more details.
                </p>

                <div className="rental-table">
                    <div className="rental-row">
                        <div className="rental-label"><strong>Full Day Rental</strong> (6am to 6am)</div>
                        <div className="rental-data">$500</div>
                    </div>
                    <div className="rental-row">
                        <div className="rental-label"><strong>Full Day Rental w/alcohol</strong><br/> (6am to 6am)</div>
                        <div className="rental-data">
                            $600
                        </div>
                    </div>
                    <div className="rental-row">
                        <div className="rental-label"><strong>Set Up Day Before*</strong> (5pm to 10pm)</div>
                        <div className="rental-data">
                            $100
                        </div>
                    </div>
                    <div className="rental-row">
                        <div className="rental-label"><strong>Clean Up Day After*</strong> (7am to 10am)</div>
                        <div className="rental-data">
                            $100
                        </div>
                    </div>
                    <div className="rental-row">
                        <div className="rental-label"><strong>Trash Removal</strong> (per bag)</div>
                        <div className="rental-data">
                            $25
                        </div>
                    </div>
                    <div className="rental-row">
                        <div className="rental-label"><strong>Labor</strong>&mdash;unscheduled after event due to renter not properly returning Hall to "as rented" condition</div>
                        <div className="rental-data">
                            $25/hour <br/> (minimum 3 hours)
                        </div>
                    </div>
                    <p style={{padding: '0 1rem'}}>
                        *Please Note: If there is another rental the day before or the day after your event the 
                        hours for set-up and /or clean up do not apply. Additionally, the insurance certificate MUST 
                        cover all day(s) you are using the Grange.
                    </p>
                </div>
                

                <h2> Deposit </h2>
                <p className="p2">
                    All rentals must be accompanied by a security/cleaning deposit which will be refunded within 30 days 
                    if the hall is in an “as rented” condition at the end of the rental. 
                </p>

                <div className="rental-table">
                    <div className="rental-row">
                        <div className="rental-label"><strong>Events not serving alcohol</strong></div>
                        <div className="rental-data">$350</div>
                    </div>
                    <div className="rental-row">
                        <div className="rental-label"><strong>Events serving alcohol</strong></div>
                        <div className="rental-data">$500</div>
                    </div>
                    <p style={{padding: '0 1rem'}}>
                        Conditions under which the cleaning deposit will be automatically forfeited: 
                        <ol style={{textAlign: 'left'}}>
                            <li>
                                Renters may not play any loud music after 10pm per county ordinance. 
                            </li>
                            <li>
                                Renters (or anyone from the renter's party) may not force open locked doors/drawers.
                            </li>
                        </ol>
                    </p>
                </div>
                </div>





               {/*} <section className="rental-rates">
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
                </section>*/}

                <section className="rental-insurance">
                    <h2>Insurance Requirements</h2>
                    <p className="p2">
                    All events require a <strong>$2,000,000 liability insurance policy</strong>, with the
                    <strong> Humboldt Grange named as “Additionally Insured.”</strong> <br/>
                    Many renters use sites like <a href="https://www.theeventhelper.com" target="_blank" rel="noopener noreferrer">theeventhelper.com</a>
                    &nbsp;or their personal insurance provider. Feel free to reach out if you need guidance.
                    </p>
                </section>


            </div>

            
        </>
    )
}