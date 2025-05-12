import React, { useState } from 'react';
import supabase from '../SupabaseClient';
import './SignUp.css';

const IndividualSignUp = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [signature, setSignature] = useState('');
  const [membershipConfirm, setMembershipConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [retired, setRetired] = useState(false);

  const membershipType = 'individual';

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!membershipConfirm) {
      alert('Please confirm your agreement before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('members')
        .insert([
          {
            full_name: name,
            dob,
            sex,
            address,
            city,
            state,
            zipcode,
            email,
            phone,
            occupation,
            retired,
            membership_type: membershipType,
            application_date: new Date().toISOString().split('T')[0],
            signature,
          },
        ]);

      setIsSubmitting(false);

      if (error) {
        console.error('Submission error:', error);
        alert('Something went wrong. Please try again.');
      } else {
        alert('Thank you for applying!');
        // Clear form
        setName('');
        setDob('');
        setSex('');
        setAddress('');
        setCity('');
        setState('');
        setZipcode('');
        setEmail('');
        setPhone('');
        setOccupation('');
        setRetired('');
        setSignature('');
        setMembershipConfirm(false);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('An unexpected error occurred.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Individual Membership Application</h2>
      <p>Please bring $37 (check/cash) to cover your application fee ($5) and dues ($32) at our next Grange meeting. 
        To view our meeting times, please see our calendar {' '}
        <a href="/calendar" target="_blank" rel="norefferer">here</a>.</p>

      <form onSubmit={handleSubmit} className="signup-form">
      <div className="form-group">
        <p>To the officers and members of the Humboldt Grange No. 501, I,</p>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
            />
        <p>
          respectfully petition to be an associate member in your Grange. In presenting this application,
          I am influenced by no motive other than a desire to support the principles of the Grange, its role
          in my community and state, and receiving in return such benefits and advantages as may accrue to all
          who are Associate members in the Grange. I promise a faithful compliance with the Laws of this Grange,
          the State Grange of California, and the National Grange. I have not applied for and been rejected for 
          membership in any other Grange within the past six months.
        </p>
        </div>

        {/* Confirmation Checkbox */}
        <div className="form-group">
          <input
            type="checkbox"
            id="membership_confirm"
            checked={membershipConfirm}
            onChange={(e) => setMembershipConfirm(e.target.checked)}
            required
          />
          <label htmlFor="membership_confirm">
            I confirm I have read and agree to the above statement and wish to be considered for individual membership.
          </label>
        </div>

        {/* Shared fields */}
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Sex</label>
          {['Male', 'Female', 'Other'].map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={option}
                name="sex"
                value={option}
                checked={sex === option}
                onChange={(e) => setSex(e.target.value)}
                required
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>

        <div className="form-group">
          <label>Street Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Occupation</label>
          <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Are you retired?</label>
          <div>
            <input
              type="radio"
              id="retiredYes"
              name="retired"
              value="Yes"
              checked={retired === 'Yes'}
              onChange={(e) => setRetired(e.target.value)}
              required
            />
            <label htmlFor="retiredYes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="retiredNo"
              name="retired"
              value="No"
              checked={retired === 'No'}
              onChange={(e) => setRetired(e.target.value)}
            />
            <label htmlFor="retiredNo">No</label>
          </div>
        </div>

        <div className="form-group">
          <label>Signature</label>
          <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} required />
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-button" style={{ marginTop: '1.5rem' }}>
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default IndividualSignUp;
