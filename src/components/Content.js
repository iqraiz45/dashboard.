import React, { useState } from 'react';
import './Content.css';
import { FaUser } from 'react-icons/fa';

const Content = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginForm(false);
    // Set username logic can go here
    setUsername('User');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="content">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="login-section">
          {isLoggedIn ? (
            <div>
              <h3>Welcome, {username}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="login-button" onClick={() => setShowLoginForm(true)}>
              <FaUser /> Login
            </div>
          )}
        </div>
      </div>

      {showLoginForm && (
        <div className="login-popup">
          <div className="popup-header">
            <h3>Login</h3>
            <button className="close-popup" onClick={() => setShowLoginForm(false)}>X</button>
          </div>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input type="text" required />
            </label>
            <label>
              Password:
              <input type="password" required />
            </label>
            <button type="submit">Login</button>
            <div className="popup-links">
              <span onClick={() => setShowSignUpForm(true)} className="link">Sign Up</span>
              <span className="link">Forgot Password?</span>
            </div>
          </form>
        </div>
      )}

      {showSignUpForm && (
        <div className="signup-popup">
          <div className="popup-header">
            <h3>Sign Up</h3>
            <button className="close-popup" onClick={() => setShowSignUpForm(false)}>X</button>
          </div>
          <form>
            <label>
              New Username:
              <input type="text" required />
            </label>
            <label>
              New Password:
              <input type="password" required />
            </label>
            <button type="submit">Sign Up</button>
            <div className="popup-links">
              <span onClick={() => { setShowSignUpForm(false); setShowLoginForm(true); }} className="link">Back to Login</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Content;
