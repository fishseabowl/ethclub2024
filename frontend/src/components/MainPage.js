import React from 'react';
import '../styles/MainPage.css'; // Import your CSS file for styling

const MainPage = () => {
  return (
    <div className="main-page-container">
      <h1 className="main-title">Private NFT Club</h1>
      <div className="main-buttons">
        <button>Forum</button>
        <button>Chat Room</button>
        <button>Private Message</button>
      </div>
    </div>
  );
};

export default MainPage;
