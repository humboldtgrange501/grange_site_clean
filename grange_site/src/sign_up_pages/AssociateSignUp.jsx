import React, { useState } from 'react';
import supabase from '../SupabaseClient';
import './SignUp.css';

const AssociateSignUp = () => {
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
  const [membershipConfirm, setMembershipConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signature, setSignature] = useState('');

  const membershipType = 'associate'; 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!membershipConfirm) {
      alert('Please confirm your agreement before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: memberError } = await supabase
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
            occupation, // included if you use occupation in the form
            membership_type: membershipType,
            application_date: new Date().toISOString().split('T')[0],
            signature,
            // family_id: someValidId, <-- if your schema requires this
          },
        ]);

      setIsSubmitting(false);

      if (memberError) {
        console.error('Member insert error:', memberError);
        alert('Something went wrong saving your information.');
      } else {
        alert('Thank you for signing up!');
        // Reset form
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
      <h2>Associate Membership Application</h2>
      <p>Please bring a check or cash for $45 to cover your application fee ($5) and dues ($40) at our next Grange meeting. 
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

        <div className="form-group">
          <input
            type="checkbox"
            id="membership_confirm"
            checked={membershipConfirm}
            onChange={(e) => setMembershipConfirm(e.target.checked)}
            required
          />
          <label htmlFor="membership_confirm">
            By checking this box, I confirm that I have read and agree to the statement above and wish to be considered for associate membership in the Humboldt Grange No. 501.
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            style={{marginLeft: '0.5rem'}}
          />
        </div>

        <div className="form-group">
            <label>Sex</label>
            <div>
                <input
                type="radio"
                id="male"
                name="sex"
                value="Male"
                checked={sex === 'Male'}
                onChange={(e) => setSex(e.target.value)}
                required
                />
                <label htmlFor="male">Male</label>
            </div>

            <div>
                <input
                type="radio"
                id="female"
                name="sex"
                value="Female"
                checked={sex === 'Female'}
                onChange={(e) => setSex(e.target.value)}
                />
                <label htmlFor="female">Female</label>
            </div>

            <div>
                <input
                type="radio"
                id="other"
                name="sex"
                value="Other"
                checked={sex === 'Other'}
                onChange={(e) => setSex(e.target.value)}
                />
                <label htmlFor="other">Other</label>
            </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Street Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occupation">Occupation (if retired, please list occupation you retired from)</label>
          <input
            type="text"
            id="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
        <label htmlFor="signature">Signature (Please type your full name to sign this application)</label>
        <input
            type="text"
            id="signature"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            required
        />
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-button" style={{marginTop: '1.5rem'}}>
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
          
        </button>
      </form>
    </div>
  );
};

export default AssociateSignUp;
