import React from "react";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import '../css/History.css';
import ThirdButton from "../components/ThirdButton";

export function History () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
    
    return (
        <>
            <Helmet><title>Our History</title></Helmet>
            <div className="history-div">
                <h1>Our History & Heritage</h1>

                <p className="p1">
                    The Humboldt Grange #501, founded in 1933, has long served as a cornerstone of community engagement 
                    and rural advocacy in Humboldt County. As part of the National Grange of the Order of 
                    Patrons of Husbandry&mdash;a fraternal organization founded in 1867 to support agricultural communities&mdash;the
                    Humboldt Grange #501 continues this legacy by fostering local connection and civic involvement.
                </p>

                <div className="history-photos">
                    <img src="../images/historical/old_grange.jpg" alt="historical grange exterior"/>
                    <img src="../images/historical/old_grange_dance.jpg" alt="historical grange event"/>
                    <img src="../images/historical/old_grange_store.jpg" alt="historical grange storefront"/>
                    
                </div>

                
                <div className="degrees-div">
                    <h2 className="degrees-h2">Grange Degrees, Seasons & Symbols</h2>
                    <p className="p2">Explore the tools, lessons, and values that form the foundation of Grange heritage.</p>
                    
                    <ThirdButton>
                        <a href="../images/historical/degrees_and_symbols.jpg" target="_blank" rel="norefferrer" className="thirdbtn-a">
                            View the Degrees & Symbols
                        </a>
                    </ThirdButton>
                        
                   
                </div>

                <div>
                    <h2 className="degrees-h2">Our Early Years: 1933-1958</h2>
                    <p>
                    Humboldt Grange #501 was founded in <b>1933</b> with help from members of Table Bluff, Elk River, Alliance, Ferndale, and other area Granges. Before the present-day hall was built, meetings were held in the Fields Landing Civic Club building. The charter members even sent a delegation to Sacramento to study Grange law and ritual, bringing that knowledge back to Humboldt County to share with other forming Granges, including Rohner and six others. The list of charter members officially closed on November 25, <b>1932</b>, and some of these members remained active into the 1960s. Dues were originally set at just 50¢ per quarter, while rent for the Fields Landing hall was $1 per meeting, paid monthly. 
                    </p>

                    <p>
                    The first mention of a building fund appears in the January 25, <b>1935</b> meeting minutes, noting $218.47 in the bank. By May 10, <b>1935</b>, a committee was formed to investigate a building site, and on July 26, <b>1935</b>, Brother and Sister Lanini donated a two-acre parcel for a new hall. At that same meeting, it was recorded that six new Grange halls had been dedicated in Humboldt County in just one week — a new record! By December 27, <b>1935</b>, the building fund had grown to $376.87. By early <b>1937</b>, plans for a new hall were moving forward. Initial discussions suggested a $2,500 investment for a 100' x 50' building, and in March a motion was passed to order such a building. A month later, revised estimates showed a 36' x 100' hall could be built for $1,947.77. By June 25, <b>1937</b>, the building fund had reached $1,179.45, and one month later the membership approved clearing ground for a 40' x 100' building. Construction began August 23, <b>1937</b>, and the hall was completed and dedicated on August 29, <b>1938</b>, by State President Sehlmeyer and State Vice President Valentine. 
                    </p>

                    <p>
                    By the close of <b>1941</b>, Humboldt Grange had 136 active members reported to the State Grange. During World War II, the hall was heavily used by the Red Cross, as well as by 4-H and Boy Scouts. On January 8, <b>1943</b>, meetings were rescheduled to the first Sunday of each month to avoid keeping the building lit at night during wartime blackouts. Records for <b>1943–1945</b> are incomplete, but it is assumed business continued at a slower pace due to the demands of the war. By the end of <b>1946</b>, regular leadership and activities resumed, and the following years brought a return to the Grange’s normal rhythm of events and projects. 
                    </p>

                    <p>
                    In <b>1948</b>, officers were sworn in, the County Fair committee was appointed, and plans for the year’s Grange activities were set. Home economics became a central focus of membership, and one notable project was a campaign to abolish the County Planning Commission in favor of prioritizing agriculture. Nineteen new members were obligated in February, and the rest of the year continued with traditional meetings and events. By <b>1950</b>, normal Grange activities were in full swing again. That year, a new project was approved to paint the hall, with labor costs capped at $225 and paint purchased from San Francisco. Officers for <b>1951</b> were elected at the December 8, <b>1950</b> meeting, and the 1950s as a whole saw steady Grange activity, including the 20th anniversary celebration in November <b>1952</b>, which was marked with a large, well-attended dinner. 
                    </p>

                    <p>
                    In February <b>1952</b>, members also voted to establish a Junior Grange, which began with 26 original members. Throughout the decade, the hall served as a community hub, hosting 4-H clubs, the Boy Scout council, Dairymen, the Elk River Community Club, and many other groups. Plans for a Juvenile Grange Hall addition to the south end of the main hall were approved, and construction began in late August. Humboldt Grange members voted to match $500 raised by the Juveniles for their annex. On May 25, <b>1956</b>, the membership approved an additional $700 toward the project, but by June 22 the decision was revised to instead borrow $2,500 to complete the work. 
                    The new “Junior Room” was dedicated on April 12, <b>1957</b>. That same year, plans began for the 25th anniversary celebration of the Grange. Election of <b>1958</b> officers took place on December 15, <b>1957</b>, with installation on January 10, <b>1958</b>. 
                    </p>
                </div>
                
            </div>
        </>
    )
}