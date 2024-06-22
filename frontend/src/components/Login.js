import React from 'react';
import Button from './Button';
import { loginUser, mintToken } from '../services/apiService';
import '../styles/Login.css';

const LoginPage = () => {
  const handleLogin = async () => {
    try {
      const response = await loginUser();
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleMint = async () => {
    try {
      const response = await mintToken();
      console.log('Mint successful:', response);
    } catch (error) {
      console.error('Mint failed:', error);
    }
  };

  return (
    <div className="login-page-container">
      <h1 className="welcome-message">Welcome to Private NFT Club</h1>
      <div className="button-container">
        <Button onClick={handleLogin} text="Login" />
        <Button onClick={handleMint} text="Mint" />
      </div>
    </div>
  );
};

export default LoginPage;