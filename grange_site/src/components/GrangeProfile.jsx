import React from 'react';
import '../css/GrangeProfile.css';

const GrangeProfile = ({ name, address, meetingTime, phone, website, photo }) => {
    return (
        <div className="grange-profile">
            {photo && <img src={photo} alt={name} className="grange-photo" />}
            <h3 className="grange-name">{name}</h3>
            {address && <p><strong>Address:</strong> {address}</p>}
            {meetingTime && <p><strong>Meeting Time:</strong> {meetingTime}</p>}
            {phone && <p><strong>Phone:</strong> {phone}</p>}
            {website && (
                <p>
                    <strong>Website:</strong>{' '}
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        {website.split('/').pop()}
                    </a>
                </p>
            )}
        </div>
    );
};

export default GrangeProfile;
