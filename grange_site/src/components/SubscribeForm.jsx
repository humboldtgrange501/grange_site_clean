import { useState } from 'react';
import supabase from '../SupabaseClient';
import '../css/SubscribeForm.css';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('subscribers')
      .insert([{ email }]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setEmail('');
      setStatus('success');
    }
  };

  return (
    <form onSubmit={handleSubmit} 
          className="subscribe-form">
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
