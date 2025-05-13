import React, { useState } from 'react';
import supabase from '../SupabaseClient';
import './SignUp.css';

const JuniorSignUp = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [signature, setSignature] = useState('');
  const [membershipConfirm, setMembershipConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
            parent_name: parentName,
            parent_email: parentEmail,
            parent_phone: parentPhone,
            membership_type: 'junior',
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
        setParentName('');
        setParentEmail('');
        setParentPhone('');
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
      <h2>Junior Membership Application</h2>
      <p>Please complete this application to apply for Junior Membership. Please note that a parent or legal guardian must complete the parent section below.</p>

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
          <p>respectfully petition to be initiated and enrolled as a Junior 1+ member in your Grange. 
             I promise a faithful compliance with the Junior Grange Pledge and will endeavor to obey 
             the adult leaders of my Grange.</p>
        </div>

        <div className="form-group">
          <label>Signature of Applicant (Please type your full name)<span className="asterisk">*</span></label>
          <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} required />
        </div>



        {/* Parent/Guardian Information */}
        <div className="form-group">
          <label>Parent/Guardian Full Name<span className="asterisk">*</span></label>
          <input
            type="text"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Parent/Guardian Email<span className="asterisk">*</span></label>
          <input
            type="email"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Parent/Guardian Phone<span className="asterisk">*</span></label>
          <input
            type="tel"
            value={parentPhone}
            onChange={(e) => setParentPhone(e.target.value)}
            required
          />
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
            As parent (or guardian), of the above name applicant, I give my permission for them to join this Grange, as a Junior member . 
          </label>
        </div>

        <div className="form-group">
          <label>Applicant's Date of Birth<span className="asterisk">*</span></label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required style={{marginLeft: '0.5rem'}} />
        </div>

        <div className="form-group">
          <label>Sex of Applicant<span className="asterisk">*</span></label>
          {['Male', 'Female', 'Prefer Not to Say'].map((option) => (
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

        {/* Address fields */}
        <div className="form-group">
          <label>Street Address<span className="asterisk">*</span></label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>City<span className="asterisk">*</span></label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>State<span className="asterisk">*</span></label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Zip Code<span className="asterisk">*</span></label>
          <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
        </div>

        {/* Contact Information */}
        <div className="form-group">
          <label>Email<span className="asterisk">*</span></label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Phone<span className="asterisk">*</span></label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>

        

        <button type="submit" disabled={isSubmitting} className="submit-button" style={{ marginTop: '1.5rem' }}>
          {isSubmitting ? 'Submitting...' : 'Submit Junior Application'}
        </button>
      </form>
    </div>
  );
};

export default JuniorSignUp;
