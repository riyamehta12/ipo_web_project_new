import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import api from '../api';
import './AuthForm.css';

const Login = ({ onSwitch }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('token/', { username, password });
      login(res.data.access, username);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <div className="auth-error">{error}</div>}
        <button type="submit">Login</button>
        <div className="auth-switch">Don't have an account? <span onClick={onSwitch}>Sign up</span></div>
      </form>
    </div>
  );
};

export default Login;
