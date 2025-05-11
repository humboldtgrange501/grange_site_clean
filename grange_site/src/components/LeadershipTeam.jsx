import React from 'react';
import TeamMember from './TeamMember';
import '../css/LeadershipTeam.css'; 

const teamData = [
    {
        name: 'Maurice Viand',
        role: 'President',
        photo: '/images/team/maurice.jpg'
    },
    {
        name: 'Kathy Moley',
        role: 'Secretary',
        photo: '/images/team/kathy.jpg'
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
