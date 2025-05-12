import React, { useEffect, useState } from 'react';
import supabase  from '../SupabaseClient';
import '../css/MemberTable.css';

const MemberTable = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch members from Supabase on mount
  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase.from('members').select('*');
      if (error) {
        setError(error.message);
      } else {
        setMembers(data);
      }
      setLoading(false);
    };

    fetchMembers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="member-table-container">
      <h2 className="table-title">Member List</h2>
      <table className="member-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Paid?</th>
            <th>Family</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.address}</td>
              <td>{member.paid ? 'Yes' : 'No'}</td>
              <td>{member.family_id}</td>
              <td>{member.status}</td>
              <td>
                <button className="edit-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;
