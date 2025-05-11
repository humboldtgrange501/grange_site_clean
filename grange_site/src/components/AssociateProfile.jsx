import React from 'react';
import '../css/GrangeProfile.css'; // Reuse the same styles

const AssociateProfile = ({ name, photo }) => {
    return (
        <div className="grange-profile">
            {photo && <img src={photo} alt={name} className="grange-photo" />}
            <h3 className="grange-name">{name}</h3>
        </div>
    );
};

export default AssociateProfile;
