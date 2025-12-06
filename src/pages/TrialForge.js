import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

const TrialForge = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Trial Forge</h1> 
      <div className="searchBarContainer">
        <input
          type="text"
          className="trialSearchBar"
          placeholder="What trials are you most interested in?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="searchButton" onClick={handleSearch}>Search</button>
      </div>

      {showPopup && (
        <div className="searchPopup">
          <p>Data tbd!</p>
        </div>
      )}

      
    </div>
  );
};

export default TrialForge;