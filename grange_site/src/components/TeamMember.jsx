import React from 'react';
import '../css/TeamMember.css';

const TeamMember = ({ name, role, photo }) => {
    return (
        <div className="team-member-profile">
            <img src={photo} alt={name} className="team-member-photo" />
            <h3 className="team-member-name">{name}</h3>
            <p className="team-member-role">{role}</p>
        </div>
    );
};

export default TeamMember;