import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import './styles/App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      {currentPage === 'login' ? (
        <LoginPage onNavigate={handleNavigate} />
      ) : (
        <MainPage />
      )}
    </div>
  );
};

export default App;
