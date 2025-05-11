import { useState } from 'react';
import '../css/SubscribeForm.css';
import supabase from '../SupabaseClient'; // Import Supabase client

export default function SubscribeForm() {

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
  
    try {
      // Step 1: Send email via your backend (Mailgun)
      const res = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Request failed');
      
      // Step 2: Log the email in Supabase
      const { error } = await supabase
        .from('subscribers') 
        .insert([{ email }]);  // Add email to database

      if (error) throw error;

      setEmail('');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="subscribe-form">
      <h2 className="subscribe-header">Join Our Mailing List</h2>
      <p className="p2 subscribe-text">Sign up with your email address to receive news and updates.</p>
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input-field"
      />
      <button type="submit" disabled={status === 'loading'} className="form-submit-btn">
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && <p style={{ color: '#333' }}>You're subscribed!</p>}
      {status === 'error' && <p style={{ color: '#333' }}>Something went wrong.</p>}
    </form>
  );
}
