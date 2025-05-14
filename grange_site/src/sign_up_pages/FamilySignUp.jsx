import React, { useState } from 'react';
import supabase from '../SupabaseClient';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const FamilySignUp = () => {
  const [familyName, setFamilyName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [recommender_one, setRecommender1] = useState('');
  const [recommender_two, setRecommender2] = useState('');
  const [members, setMembers] = useState([
    { full_name: '', dob: '', sex: '', occupation: '' },
  ]);
  const [membershipConfirm, setMembershipConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleMemberChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const addMember = () => {
    if (members.length < 6) {
      setMembers([...members, { full_name: '', dob: '', sex: '', occupation: '' }]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!membershipConfirm) {
      alert('Please confirm your agreement before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Create family
      const { data: familyData, error: familyError } = await supabase
        .from('families')
        .insert([{ family_name: familyName }])
        .select()
        .single();

      if (familyError || !familyData) {
        throw familyError || new Error('Failed to create family record');
      }

      const family_id = familyData.id;

      // 2. Build member records with appropriate membership_type
      const memberRows = members.map((member, index) => {
        const birthDate = new Date(member.dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const mDiff = today.getMonth() - birthDate.getMonth();
        if (mDiff < 0 || (mDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }

        let membership_type = 'family_member';
        if (index === 0) {
          membership_type = 'family_head';
        } else if (age >= 5 && age <= 14) {
          membership_type = 'junior';
        }

        return {
          full_name: member.full_name,
          dob: member.dob,
          sex: member.sex,
          occupation: member.occupation || null,
          email: index === 0 ? email : null,
          phone: index === 0 ? phone : null,
          address,
          city,
          state,
          zipcode,
          membership_type,
          family_id,
          application_date: new Date().toISOString().split('T')[0],
          recommender_one: index === 0 ? recommender_one : null,
          recommender_two: index === 0 ? recommender_one : null,
        };
      });

      const { error: membersError } = await supabase.from('members').insert(memberRows);
      if (membersError) throw membersError;

      navigate('/sign-up-confirmation?type=family');
      // Reset form
      setFamilyName('');
      setAddress('');
      setCity('');
      setState('');
      setZipcode('');
      setEmail('');
      setPhone('');
      setRecommender1('');
      setRecommender2('');
      setMembers([{ full_name: '', dob: '', sex: '', occupation: '' }]);
      setMembershipConfirm(false);
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Family Membership Application</h2>
      
      <form onSubmit={handleSubmit} className="signup-form">
      <div className="form-group">
        <p>We the</p>
            <input
                type="text"
                id="familyName"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                placeholder="Your Family Name"
                required
            />
        <p>
            family respectfully petition to be initiated and enrolled as a member in your Grange. 
            In presenting this application, We are influenced by no motive other than a desire to
            unite with others in elevating and advancing the interest of my community through the principles of the Grange and
            receiving in return such benefits and advantages as may accrue to all who belong to the Grange. We promise a
            faithful compliance with the By-Laws of this Grange, the By-Laws of the State Grange of California and the
            Constitution and By-Laws of the National Grange. We have not applied for and been rejected for membership in
            any other Grange within the past six months.
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
            We confirm that we have read and agree to the Grange principles and wish to apply as a family.
          </label>
        </div>

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
        <div className="form-group">
          <label>Email (for head of household)<span className="asterisk">*</span></label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Phone (for head of household)<span className="asterisk">*</span></label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="recommender_one">Recommended by 1<span className="asterisk">*</span></label>
          <input
            type="text"
            id="recommender_one"
            value={recommender_one}
            onChange={(e) => setRecommender1(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Recommended by 2</label>
          <input type="text" value={recommender_two} onChange={(e) => setRecommender2(e.target.value)} />
        </div>

        <h3>Family Members</h3>
        <p>
            A family consists of a couple and their dependents, or a single person and their dependents. 
            Dependents are defined as children, grandchildren, great grandchildren, foster, adopted or step-children 
            under the age of 23, who live in the same household (or at a different address due to illness, education or 
            military service). <br />
            <em>Legal dependents of any age shall be considered part of their legal guardians' family.</em>
        </p>

        {members.map((member, index) => (
        <div key={index} className="member-group">
            <h4>
            Family Member #{index + 1} {index === 0 && <span>(Primary Member)</span>}
            </h4>

            <label>Full Name<span className="asterisk">*</span></label>
            <input
            type="text"
            value={member.full_name}
            onChange={(e) => handleMemberChange(index, 'full_name', e.target.value)}
            required
            />

            <div className="form-group-inline">
            <div className="form-inline-item">
                <label>Date of Birth<span className="asterisk">*</span></label>
                <input
                type="date"
                value={member.dob}
                onChange={(e) => handleMemberChange(index, 'dob', e.target.value)}
                required
                />
            </div>
            <div className="form-inline-item">
                <label>Sex<span className="asterisk">*</span></label>
                <select
                value={member.sex}
                onChange={(e) => handleMemberChange(index, 'sex', e.target.value)}
                required
                >
                <option value="">--Select--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer Not to Say">Prefer Not to Say</option>
                </select>
            </div>
            </div>

            <label>Occupation (leave blank if not applicable)</label>
            <input
            type="text"
            value={member.occupation}
            onChange={(e) => handleMemberChange(index, 'occupation', e.target.value)}
            />

            <div className="form-group">
            <input
                type="checkbox"
                id={`confirm-${index}`}
                checked={member.confirmed || false}
                onChange={(e) => handleMemberChange(index, 'confirmed', e.target.checked)}
                required
                style={{marginTop: '1rem'}}
            />
            <label htmlFor={`confirm-${index}`}>
                Yes, I confirm my information is correct and that I am signing up to be part of a family membership for the Grange.
            </label>
            </div>
        </div>
        ))}

        {members.length < 6 && (
        <button type="button" onClick={addMember} className="add-member-button">
            + Add Another Family Member
        </button>
        )}

        <button type="submit" disabled={isSubmitting} className="submit-button">
        {isSubmitting ? 'Submitting...' : 'Submit Family Application'}
        </button>

      </form>
    </div>
  );
};

export default FamilySignUp;
