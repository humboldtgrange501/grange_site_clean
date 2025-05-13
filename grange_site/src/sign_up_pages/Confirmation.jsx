// src/pages/ThankYouPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import supabase from '../SupabaseClient';
import './SignUp.css';
import PrimaryButton from '../components/PrimaryButton';

const duesAmounts = {
  individual: '$37',
  associate: '$45',
  family: '$69',
  junior: 'FREE',
};

const ThankYouPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const membershipType = searchParams.get('type');
  const [nextMeetingDate, setNextMeetingDate] = useState(null);


  useEffect(() => {
    const fetchNextMeeting = async () => {
     const { data, error } = await supabase
        .from('meetings')
        .select('date')
        .gt('date', new Date().toISOString())
        .eq('is_cancelled', false)
        .order('date', { ascending: true })
        .limit(1);


      if (data && data.length > 0) {
        setNextMeetingDate(new Date(data[0].date).toLocaleDateString());
      } else {
        setNextMeetingDate('TBD');
      }

      if (error) {
        console.error('Failed to fetch meeting date:', error.message);
      }
    };

    fetchNextMeeting();
  }, []);

  const fee = duesAmounts[membershipType?.toLowerCase()] || 'TBD';

  return (
    <div className="thankyou-container" >
      <h2>Thank You for Applying to the Humboldt Grange #501!</h2>
      <p className="p2" >We will be emailing you within a couple of days with further instructions. If you can, please join us at our next meeting:
      </p>

      <div className="meeting-details" >
        <ul >
            <li>
                <strong>Date: </strong>{nextMeetingDate}
            </li>
            <li>
                <strong>Time: </strong>6:30pm
            </li>
            <li>
                <strong>Location: </strong>5845 Humboldt Hill Rd. Eureka, CA 95503
            </li>
        </ul>
      </div>

      <p className="p2">
         Please bring your application fee and dues of <strong className="fee">{fee}</strong> in cash or check. We can't wait to meet you!
      </p>

      <div className="confirmation-home-btn">
        <PrimaryButton to="/" >Back to Home</PrimaryButton>
      </div>
    </div>

  );
};

export default ThankYouPage;
