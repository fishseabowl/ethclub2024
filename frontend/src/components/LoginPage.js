import React, { useState } from 'react';
import Button from './Button';
import { loginUser, mintToken } from '../services/apiService';
import '../styles/LoginPage.css'; // Import your CSS file for styling

const LoginPage = ({ onNavigate }) => {
  const [message, setMessage] = useState('');
  const [isMinted, setIsMinted] = useState(false);

  const handleLogin = async () => {
    if (isMinted) {
      onNavigate('main');
    } else {
      try {
        // Simulate a failed login attempt
        setMessage('Login failed: without permission');
      } catch (error) {
        console.error('Login failed:', error);
        setMessage('Login failed: without permission');
      }
    }
  };

  const handleMint = async () => {
    try {
      // Simulate a successful mint
      await mintToken('123'); // Example userId
      setMessage('Mint successful');
      setIsMinted(true);
    } catch (error) {
      console.error('Mint failed:', error);
      setMessage('Mint failed');
    }
  };

  return (
    <div className="login-page-container">
      <h1 className="welcome-message">Welcome to the private NFT club</h1>
      <div className="button-container">
        <Button onClick={handleLogin} text="Login" size="large" />
        <Button onClick={handleMint} text="Mint" size="large" />
      </div>
      {message && (
        <div className="message-popup">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
