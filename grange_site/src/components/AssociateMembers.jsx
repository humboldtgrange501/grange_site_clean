import React from 'react';
import AssociateProfile from './AssociateProfile';
import '../css/GrangesInfo.css';

const associateData = [
    {
        name: 'Friends of Elk River',
        photo: '/images/associate_members/friends_of_elk_river.jpg'
        
    },
    {
        name: 'Sequoia Humane Society',
        photo: '/images/associate_members/sequoia_humane_society.jpg'
        
    },
    
    // Add more associates here
];

const AssociateMembers = () => {
    return (
        <section className="granges-container">
            {associateData.map((associate, index) => (
                <AssociateProfile
                    key={index}
                    name={associate.name}
                    photo={associate.photo}
                />
            ))}
        </section>
    );
};

export default AssociateMembers;
