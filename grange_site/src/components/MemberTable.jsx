import React, { useEffect, useState } from 'react';
import supabase from '../SupabaseClient';
import '../css/MemberTable.css';

const MemberTable = () => {
  const [individuals, setIndividuals] = useState([]);
  const [families, setFamilies] = useState([]);
  const [associates, setAssociates] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: members, error: membersError } = await supabase.from('members').select('*');
        const { data: familiesData, error: familiesError } = await supabase.from('families').select('*');
        const { data: subscriberData, error: subError } = await supabase
                .from('subscribers')
                .select('*')
                .order('created_at', { ascending: false });

        if (membersError || familiesError || subError) {
          throw new Error(membersError?.message || familiesError?.message || subError?.message);
        }

        const individualMembers = members.filter(m => m.membership_type === 'individual');
        const associateMembers = members.filter(m => m.membership_type === 'associate');

        const familiesGrouped = familiesData.map(family => {
          const familyMembers = members.filter(m => m.family_id === family.id);
          return { ...family, members: familyMembers };
        });

        setIndividuals(individualMembers);
        setAssociates(associateMembers);
        setFamilies(familiesGrouped);
        setSubscribers(subscriberData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderMemberRow = (member) => (
    <tr key={member.id}>
      <td>{member.full_name}</td>
      <td>{member.address}</td>
      <td>{member.dues_paid ? 'Yes' : 'No'}</td>
      <td>{member.family_id ? 'Yes' : 'No'}</td>
      <td>{member.membership_type}</td>
      <td><button className="edit-button">Edit</button></td>
    </tr>
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="member-table-container">
      <h2 className="table-title">Individual Members</h2>
      <table className="member-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Paid?</th>
            <th>Family?</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {individuals.map(renderMemberRow)}
        </tbody>
      </table>

      <h2 className="table-title">Families</h2>
      {families.map(family => (
        <div key={family.id} className="family-group">
          <h3 className="family-name">{family.family_name}</h3>
          <table className="member-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Paid?</th>
                <th>Role</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {family.members.map(renderMemberRow)}
            </tbody>
          </table>
        </div>
      ))}

      <h2 className="table-title">Associate Members</h2>
      <table className="member-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Paid?</th>
            <th>Family?</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {associates.map(renderMemberRow)}
        </tbody>
      </table>

      <h2 className="table-title">Email Subscribers</h2>
      <table className="member-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Subscribed On</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map(sub => (
            <tr key={sub.id}>
              <td>{sub.email}</td>
              <td>{new Date(sub.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;
