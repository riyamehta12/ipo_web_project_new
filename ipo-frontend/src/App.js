import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider, AuthContext } from './auth/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const TopPanel = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="top-panel">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" className="top-logo" />
      <span className="top-title">IPO Upcoming Screen</span>
      <div className="top-panel-spacer"></div>
      {!user ? (
        <div className="top-auth-buttons">
          <button className="top-btn signin" type="button" onClick={() => navigate('/login')}>
            <FontAwesomeIcon icon={faSignInAlt} style={{marginRight: 8}} /> Sign In
          </button>
          <button className="top-btn signup" type="button" onClick={() => navigate('/signup')}>
            <FontAwesomeIcon icon={faUserPlus} style={{marginRight: 8}} /> Sign Up
          </button>
        </div>
      ) : (
        <button className="top-btn logout" type="button" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} style={{marginRight: 8}} /> Logout
        </button>
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <TopPanel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onSwitch={() => window.location='/signup'} />} />
          <Route path="/signup" element={<Signup onSwitch={() => window.location='/login'} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
