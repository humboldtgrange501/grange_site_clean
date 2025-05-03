import React from 'react';
import TeamMember from './TeamMember';
import '../css/LeadershipTeam.css'; 

const teamData = [
    {
        name: 'Maurice Viand',
        role: 'President',
        photo: '/images/team/maurice.png'
    },
    {
        name: 'Mavis Amen',
        role: 'Vice President',
        photo: '/images/team/mavis.png'

    },
    {
        name: 'Kathy Moley',
        role: 'Secretary',
        photo: '/images/team/kathy.png'
    },
    {
        name: 'Janice Simmons',
        role: 'Treasurer',
        photo: '/images/team/janice.png'
    },

];

const LeadershipTeam = () => {
    return (
        <section className="team-container">
            {teamData.map((member, index) => (
                <TeamMember
                    key={index}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                />
            ))}
        </section>
    );
};

export default LeadershipTeam;
