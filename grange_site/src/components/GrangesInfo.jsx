import React from 'react';
import GrangeProfile from './GrangeProfile';
import '../css/GrangesInfo.css';

const grangeData = [
    {
        grange_name: 'Bayside Grange #500',
        address: '2297 Jacoby Creek Rd. Bayside, CA 95524',
        meeting_time: 'Every 2nd Sunday',
        phone: '(707) 630-3049',
        website: 'https://www.baysidegrange.com', 
        photo: '/images/granges/bayside_grange.jpg'
        
    },
    {
        grange_name: 'Dows Prairie Grange #505',
        address: '3995 Dows Prairie Rd. McKinleyville, CA',
        meeting_time: 'Every 3rd Wednesday',
        phone: '707-840-0100',
        website: 'https://dowsprairiegrange.org', 
        photo: '/images/granges/dows_prarie_grange.jpg'
    },
    {
        grange_name: 'Fieldbrook Grange #771',
        address: '4926 Fieldbrook Rd. McKinleyville, CA 95519',
        phone: '707-498-0801',
        photo: '/images/granges/fieldbrook_grange.jpg'
    },
    {
        grange_name: 'Freshwater Grange #499',
        address: '49 Grange Rd. Eureka, CA 95503',
        phone: '707-498-9447',
        website: 'https://freshwatergrange.com',
        photo: '/images/granges/freshwater_grange.jpg'
    },
    {
        grange_name: 'Humboldt Grange #501',
        address: '5845 Humboldt Hill Rd., Eureka CA',
        meeting_time: 'Every 2nd Thursday',
        phone: '707-442-4890',
        website: 'https://humboldtgrange501.org',
        photo: '/images/granges/grange_nice.jpg'
    },
    {
        grange_name: 'Mad River Grange #590',
        address: '101 Hatchery Rd. Blue Lake, CA 95525',
        meeting_time: 'Every 2nd Wednesday',
        phone: '707-382-5457',
        website: 'https://madrivergrange.org',
        photo: '/images/granges/mad_river_grange.jpg'
    },
    {
        grange_name: 'Mattole Grange #569',
        address: '36512 Mattole Rd. Petrolia, CA 95558',
        meeting_time: 'Every 2nd Thursday',
        phone: '707-629-3421',
        photo: '/images/granges/mattole_grange.jpg'
    },
    {
        grange_name: 'Redcrest Community Grange #504',
        address: '115 Sorenson Rd. #6 Redcrest, CA 95569',
        photo: '/images/granges/redcrest_grange.jpg'
    },
    {
        grange_name: 'Van Duzen River Grange #517',
        address: '5250 CA-36 Carlotta, CA 95528',
        meeting_time: 'Every 2nd Wednesday',
        phone: '707-768-2115',
        photo: '/images/granges/vanduzen_grange.jpg'
    },
 
    // Add more granges here
];

const GrangesInfo = () => {
    return (
        <section className="granges-container">
            {grangeData.map((grange, index) => (
                <GrangeProfile
                key={index}
                name={grange.grange_name}
                address={grange.address}
                meetingTime={grange.meeting_time}
                phone={grange.phone}
                website={grange.website}
                photo={grange.photo}
            />
            
            ))}
        </section>
    );
};

export default GrangesInfo;
