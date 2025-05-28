import React, { useEffect, useState } from 'react';
import supabase from '../SupabaseClient';
import '../css/MemberTable.css';

const MemberTable = () => {
  const [members, setMembers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const { data, error } = await supabase
          .from('members')
          .select('*')
          .order('full_name', { ascending: true });

        if (error) throw error;

        setMembers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    const fetchSubscribers = async () => {
      try {
        const { data, error } = await supabase
          .from('subscribers')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        setSubscribers(data);
      } catch (err) {
        console.error('Error fetching subscribers:', err.message);
      }
    };

    fetchMembers();
    fetchSubscribers();
  }, []);

  const handleEditClick = (member) => {
    setEditingId(member.id);
    setFormData({ ...member });
  };

  const handleSaveClick = async () => {
    const { id, ...updatedData } = formData;
    const { error } = await supabase
      .from('members')
      .update(updatedData)
      .eq('id', id);

    if (!error) {
      setMembers(members.map(m => m.id === id ? { ...formData } : m));
      setEditingId(null);
    } else {
      alert('Error saving changes: ' + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const getMemberTypeLabel = (type) => {
    switch (type) {
      case 'individual': return 'Individual';
      case 'junior': return 'Junior';
      case 'associate': return 'Associate';
      case 'family_head': return 'Family Head';
      case 'family_member': return 'Family Member';
      default: return type;
    }
  };

  const sortedMembers = [...members].sort((a, b) => {
    return getMemberTypeLabel(a.membership_type).localeCompare(getMemberTypeLabel(b.membership_type));
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    
    <div className="member-table-container">
      {/*
      <h2 className="table-title">All Members</h2>
      <table className="member-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Type</th>
            <th>Paid?</th>
            <th>Active?</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Sex</th>
            <th>Occupation</th>
            <th>Retired?</th>
            <th>Recommenders</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {sortedMembers.map(member => (
            <tr key={member.id}>
              <td>{editingId === member.id ? <input name="full_name" value={formData.full_name || ''} onChange={handleChange} /> : member.full_name}</td>
              <td>
                {editingId === member.id ? (
                  <>
                    <input name="address" value={formData.address || ''} onChange={handleChange} placeholder="Street Address" />
                    <input name="city" value={formData.city || ''} onChange={handleChange} placeholder="City" />
                    <input name="state" value={formData.state || ''} onChange={handleChange} placeholder="State" />
                    <input name="zipcode" value={formData.zipcode || ''} onChange={handleChange} placeholder="Zip" />
                  </>
                ) : (
                  `${member.address || ''} ${member.city || ''}, ${member.state || ''} ${member.zipcode || ''}`
                )}
              </td>
              <td>{getMemberTypeLabel(member.membership_type)}</td>
              <td>{editingId === member.id ? <input type="checkbox" name="dues_paid" checked={formData.dues_paid || false} onChange={handleChange} /> : member.dues_paid ? 'Yes' : 'No'}</td>
              <td>{editingId === member.id ? <input type="checkbox" name="is_active" checked={formData.is_active || false} onChange={handleChange} /> : member.is_active ? 'Yes' : 'No'}</td>
              <td>{editingId === member.id ? <input name="email" value={formData.email || ''} onChange={handleChange} /> : member.email}</td>
              <td>{editingId === member.id ? <input name="phone" value={formData.phone || ''} onChange={handleChange} /> : member.phone}</td>
              <td>{editingId === member.id ? <input name="dob" value={formData.dob || ''} onChange={handleChange} /> : member.dob}</td>
              <td>{editingId === member.id ? <input name="sex" value={formData.sex || ''} onChange={handleChange} /> : member.sex}</td>
              <td>{editingId === member.id ? <input name="occupation" value={formData.occupation || ''} onChange={handleChange} /> : member.occupation}</td>
              <td>{editingId === member.id ? <input type="checkbox" name="retired" checked={formData.retired || false} onChange={handleChange} /> : member.retired ? 'Yes' : ''}</td>
              <td>
                {editingId === member.id ? (
                  <input
                    name="recommenders"
                    value={`${formData.recommender_one || ''}${formData.recommender_one && formData.recommender_two ? ', ' : ''}${formData.recommender_two || ''}`}
                    onChange={handleChange}
                  />
                ) : (
                  `${member.recommender_one || ''}${member.recommender_one && member.recommender_two ? ', ' : ''}${member.recommender_two || ''}`
                )}
              </td>
              <td>
                {editingId === member.id ? (
                  <>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditClick(member)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
      */}

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
