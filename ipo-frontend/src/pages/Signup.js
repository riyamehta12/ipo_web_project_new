import React, { useState } from 'react';
import api from '../api';
import './AuthForm.css';

const Signup = ({ onSwitch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await api.post('signup/', { username, password });
      setSuccess('Account created! You can now log in.');
    } catch (err) {
      setError('Signup failed. Try a different username.');
    }
  };

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}
        <button type="submit">Sign Up</button>
        <div className="auth-switch">Already have an account? <span onClick={onSwitch}>Login</span></div>
      </form>
    </div>
  );
};

export default Signup;
