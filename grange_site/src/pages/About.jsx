import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import '../css/About.css';

export function About () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
      
    return (
        <>
        <Helmet><title>About Us</title></Helmet>
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-header">
            <img className="about-header-img" src="./images/grange_nice.jpg" alt="Humboldt Grange #501"/> 
                <div className="about-header-text">
                    <h2>What is the Grange?</h2>
                    <p className="p1">
                        Established in 1867, the Grange is the oldest farm organization in the United States. It is a national fraternal organization dedicated to meeting the needs of rural and agricultural communities through grassroots service, advocacy, and leadership training.
                    </p>
                </div>
            </div>
            <div className="about-join">
                <div className="about-join-text">
                    <h2>Who can Join?</h2>
                    <p className="p1">
                        The Community/Subordinate Grange is open to anyone of good moral character age 14 or older 
                        who cares about their community and the food system. 
                        We have a Junior Grange program for children age 5 to 14, 
                        that has helped the youngest members of the family learn about community values 
                        and citizenship for more than 100 years. 
                    </p>
                </div>
                <img className="about-join-img" src="./images/spring_board_grange.jpg" alt="Humboldt Grange #501"/> 
            </div>
            
            
            <p className="p2"><em>Did you know that women have been equal members since the inception of the Grange?</em></p>
            <PrimaryButton to="/membership" >Become a Member Today!</PrimaryButton>
            
            <h2>AGRICULTURAL   •   COMMUNITY   •   FAMILY   •   FRATERNAL</h2>
{/*}

            <div className="acff-div">
                <h2>AGRICULTURAL</h2>
                <h2 className="middot">&middot;</h2>
                <h2>COMMUNITY</h2>
                <h2 className="middot">&middot;</h2>
                <h2>FAMILY</h2>
                <h2 className="middot">&middot;</h2>
                <h2>FRATERNAL</h2>
            </div>*/}
            <div className="acff-info">
                <div className="org-list-div">
                    <h3>As an <span className="org-title">Agricultural Organization</span> we:</h3>
                    <ul>
                        <li><p>Provide a voice for farmers and rural Americans.</p></li>
                        <li><p>Influence state and national policies.</p></li>
                        <li><p>Support economic development in rural areas.</p></li>
                    </ul>
                </div>

                <div className="org-list-div">
                    <h3>As a <span className="org-title">Community Organization</span> we:</h3>
                    <ul>
                        <li><p>Lead local service projects.</p></li>
                        <li><p>Partner with schools, churches, and other service groups.</p></li>
                        <li><p>Promote lifelong learning.</p></li>
                    </ul>
                </div>

                <div className="org-list-div">
                    <h3>As a <span className="org-title">Family Organization</span> we:</h3>
                    <ul>
                        <li><p>Welcome members of all ages.</p></li>
                        <li><p>Offer full membership beginning at age 14.</p></li>
                        <li><p>Invite children aged 5 to 14 to join our  {' '}
                            <a href="/">Junior Grange</a> program.</p></li>
                    </ul>
                </div>

                <div className="org-list-div">
                    <h3>As a <span className="org-title">Fraternal Organization</span> we:</h3>
                    <ul>
                        <li><p>Provide social and recreational fellowship.</p></li>
                        <li><p>Foster brotherhood in an atmosphere of mutual interest.</p></li>
                        <li><p>Work together to improve our community.</p></li>
                    </ul>
                </div>

            </div>
            <blockquote className="quote">
                "In essentials, unity; in non-essentials, liberty; in all things, charity." &mdash; Grange Motto
            </blockquote>

            <PrimaryButton to="/about/humboldt-county-granges">See All Humboldt County Granges</PrimaryButton>
            
        </div>
        </>
    )
}