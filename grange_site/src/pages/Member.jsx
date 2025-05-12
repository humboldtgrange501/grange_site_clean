import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import ThirdButton from '../components/ThirdButton';
import '../css/Member.css';
import AssociateMembers from '../components/AssociateMembers';

export function Member () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  


    return (
        <>
            <Helmet><title>Become a Member</title></Helmet>
            <h1>Join the Humboldt Grange</h1>
            <div className="membership-info-div">
                <h2>Become a Member. Make a Difference.</h2>
                <p className="join p2">Becoming a Grange Member is easy and affordable! 
                Membership in all the Humboldt Grange #501 begins at 13 and a half years of age. 
                Children ages 5 to 13 and a half can join a as a Junior Grange member. 
                <br/>Explore the different types of membership below:
                </p>

                <div className="member-steps">
                    <h2> 1. SELECT</h2>
                    <h2> 2. SUBMIT</h2>
                    <h2>3. ATTEND</h2>
                    <h2>4. ENJOY</h2>
                </div>
               
                <div className="membership-options"> {/* Holds all the info sections */}

                    <div className="membership-info-breakdown"> {/* Individual Membership Info */}
                        <PrimaryButton to="pdfs/application-forms/Individual_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Individual Membership</PrimaryButton>
                        <h3 className="dues">Annual Dues: $32</h3>
                        <p> Individual Grange membership is open to any person of good character who has a
                                    desire to serve their community and be part of the larger fraternal Grange family.
                                    Membership begins at 13.5 years of age.
                        </p>
                        {/*<ul>
                            <li>
                                
                            </li>
                            <li>
                                <p> To join, applications may be submitted to the Humboldt Grange #501.
                                    The application must be signed by at least one current member of the Grange.
                                </p>
                            </li>
                            <li>
                                <p> After your application is approved, you will be expected to attend a meeting at which
                                    you will be inducted into the Grange.
                                </p>
                            </li>
                        </ul>*/}
                        <div className="membership-application-buttons">
                            <ThirdButton to="pdfs/application-forms/Individual_Member_Application_Humboldt_Grange_501_En.pdf" newTab>
                                Apply Now
                            </ThirdButton>
                        </div>

                        <div className="membership-disclaimer">
                            <p> OR download a PDF version {' '}
                                <a href="pdfs/application-forms/Individual_Member_Application_Humboldt_Grange_501_En.pdf" target="_blank" rel="norefferer" >here</a>. 
                                <br/>
                                Please email your filled out application to  {' '}
                                <a href="mailto:info@humboldtgrange501.org">info@humboldtgrange501.org</a> {' '}
                                or bring it in person!
                            </p>
                            <p className="spanish-disclaimer">¿Necesitas una versión en español? Descarga nuestra solicitud de membresía individual {' '}
                                <a href="pdfs/application-forms/Individual_Member_Application_Humboldt_Grange_501_Espanol.pdf" target="_blank" rel="norefferer">aquí</a>.
                                Envía tu solicitud completa por correo electrónico a {' '}
                                <a href="mailto:info@humboldtgrange501.org">info@humboldtgrange501.org</a> {' '}
                                o tráela en persona.
                            </p>
                        </div>
                    </div>

                    

                    <div className="membership-info-breakdown"> {/* Family Membership Info */}
                        <PrimaryButton to="pdfs/application-forms/Family_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Family Membership</PrimaryButton>
                        <h3 className="dues">Annual Dues: $64</h3>
                        <p> The Grange offers a family membership program open to any person of good character
                                    who has a desire to serve their community and be part of the larger fraternal Grange family.
                                    Membership begins at 13 and a half years of age.
                        <br/>
                        <br/>
                        A family consists of a couple and their dependents, or a single person and their dependents.
                                    Dependents are defined as children, grandchildren, great grandchildren, foster, adopted or step-children
                                    under the age of 23, who live in the same household
                                    (or at a different address due to illness, education or military service). {' '}
                                    <em>Legal dependents of any age shall be considered part of their legal guardians' family.</em>
                        </p>
                    
                        {/*<ul>
                            <li>
                                
                            </li>
                            <li>
                                <p> A family consists of a couple and their dependents, or a single person and their dependents.
                                    Dependents are defined as children, grandchildren, great grandchildren, foster, adopted or step-children
                                    under the age of 23, who live in the same household
                                    (or at a different address due to illness, education or military service). {' '}
                                    <em>Legal dependents of any age shall be considered part of their legal guardians' family.</em>
                                </p>
                            </li>
                            <li>
                                <p> To join, applications may be submitted to the Humboldt Grange #501.
                                    The application must be signed by at least one current member of the Grange.
                                </p>
                            </li>
                            <li>
                                <p> After your application is approved, you will be expected to attend a meeting at which
                                    you will be inducted into the Grange.
                                </p>
                            </li>
                        </ul>*/}
                        <div className="membership-application-buttons">
                            <ThirdButton to="pdfs/application-forms/Family_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Apply Now</ThirdButton>
                        </div>
                        <div className="membership-disclaimer">
                            <p> OR download a PDF version {' '}
                                <a href="pdfs/application-forms/Family_Member_Application_Humboldt_Grange_501_En.pdf" target="_blank" rel="norefferer" >here</a>. 
                                <br/>
                                Please email your filled out application to  {' '}
                                <a href="mailto:info@humboldtgrange501.org">info@humboldtgrange501.org</a> {' '}
                                or bring it in person!
                            </p>
                            <p className="spanish-disclaimer">¿Necesitas una versión en español? Descarga nuestra solicitud de membresía individual {' '}
                                <a href="pdfs/application-forms/Family_Member_Application_Humboldt_Grange_501_Espanol.pdf" target="_blank" rel="norefferer">aquí</a>.
                                Envía tu solicitud completa por correo electrónico a {' '}
                                <a href="mailto:info@humboldtgrange501.org">info@humboldtgrange501.org</a> {' '}
                                o tráela en persona.
                            </p>
                        </div>
                    </div>

                    <div className="membership-info-breakdown" id="associate-membership-info"> {/* Associate Membership Info */}
                        <PrimaryButton to="/membership">Associate Membership</PrimaryButton>
                        <h3 className="dues">Annual Dues: $40</h3>
                        <p> Associate membership is open to individuals and businesses who are looking to support a
                                    Grange in their Community. Associate members are Grange supporters and <em>cannot</em> vote in a
                                    Grange meeting.
                        </p>
                        {/*<ul>
                            <li>
                                
                            </li>
                            <li>
                                <p> To join, applications may be submitted to the Humboldt Grange #501.
                                    The application must be signed by at least one current member of the Grange.
                                </p>
                            </li>
                        </ul>*/}
                        <div className="membership-application-buttons">
                            <ThirdButton to="/sign-up-associate" newTab>Apply Now</ThirdButton>
                        </div>
                        <div className="membership-disclaimer">
                            <p> OR download a PDF version {' '}
                                <a href="pdfs/application-forms/Associate_Member_Application_Humboldt_Grange_501_En.pdf" target="_blank" rel="norefferer" >here</a>. 
                                <br/>
                                Please email your filled out application to  {' '}
                                <a href="mailto:info@humboldtgrange501.org">info@humboldtgrange501.org</a> {' '}
                                or bring it in person!
                            </p>
                        </div>
                    </div>



                </div>

                <div className="junior-membership"> {/* Junior Membership Info */}
                        <PrimaryButton to="pdfs/application-forms/Junior_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Junior Grange Membership &mdash; for ages 5 to 14</PrimaryButton>
                        <h3 className="dues">Annual Dues:</h3>
                        <p> Junior Grange membership is open to any child at least 5 years 
                            old and not be older than 14 years (membership terminates at the 
                            end of the year when the member reaches 14).
                            
                            To join, applications may be submitted to the Humboldt Grange #501. 
                            The application must be signed by a parent or guardian. Click below to get 
                            the application, and get ready to have fun in the Junior Grange!
                        </p>
                        <div className="membership-application-buttons">
                            <ThirdButton to="pdfs/application-forms/Junior_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Apply as a Junior Grange Member Today!</ThirdButton>
                        </div>
                </div>

                

                <h2>Once you've filled out the application <a href="mailto:humboldt.grange.501@gmail.com" className="mailto">email</a> it to us or bring to a meeting.</h2>
               
                <h2 className="monthly-meeting-h2">Monthly Grange Meetings</h2>
                <p className="p2">
                    We meet in-person on the second Thursday of the month from 6:30 to 8:30pm. 
                </p>
                
                <h2 className="benefits-h2">Member Benefits</h2>
                <div className="p2 benefits">
                    <p>Active Grange members enjoy a wide range of benefits including: </p>
                    <ul>
                        <li><p>Discounted hall rental and table fees at markets.</p></li>
                        <li><p><a href="/scholarships" target="_blank" rel="norefferrer">Scholarship opportunities</a> for members or descendants of members attending college.</p></li>
                        <li><p>Access to National Grange benefits. For a full list of benefits please view the {' '}
                              <a href="https://www.nationalgrange.org/our-values/benefits-to-members/" target="_blank" rel="noreferrer">
                                 National Grange Website
                              </a>.
                            </p>
                        </li>
                    </ul> 
                </div>

                <h2 className="associate-members-h2">Our Current Associate Members</h2>
                <p style={{ textAlign: 'center' }}>Interested in becoming an Associate member?  {' '}
                    <a href="#associate-membership-info">Join the Grange</a> today!</p>
                <div>
                    <AssociateMembers />
                </div>
               
            </div>
        </>


    );
}

