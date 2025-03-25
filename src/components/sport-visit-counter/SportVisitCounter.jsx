import React, { useState } from 'react';
import './SportVisitCounter.css';

function SportVisitCounter() {
  // State to keep track of votes for each sport
  const [votes, setVotes] = useState({
    football: 0,
    basketball: 0,
    tennis: 0,
    gym: 0,
    running: 0,
    swimming: 0,
    cycling: 0,
  });

  // Function to handle voting for a sport
  const handleVote = (sport) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [sport]: prevVotes[sport] + 1,
    }));
  };

  // Function to get total votes
  const getTotalVotes = () => {
    return Object.values(votes).reduce((acc, cur) => acc + cur, 0);
  };

  // Function to get percentage of votes for a sport
  const getPercentage = (sport) => {
    const total = getTotalVotes();
    return total === 0 ? 0 : ((votes[sport] / total) * 100).toFixed(1);
  };

  return (
    <div className="vote-container">
      <h2 className="vote-title">Vota por tu deporte favorito</h2>
      <div className="vote-options">
        {/* Buttons for voting */}
        <button className="vote-button football" onClick={() => handleVote('football')}>
          Fútbol ({votes.football} votos)
        </button>
        <button className="vote-button basketball" onClick={() => handleVote('basketball')}>
          Baloncesto ({votes.basketball} votos)
        </button>
        <button className="vote-button tennis" onClick={() => handleVote('tennis')}>
          Tenis ({votes.tennis} votos)
        </button>
        <button className="vote-button gym" onClick={() => handleVote('gym')}>
          Gimnasio ({votes.gym} votos)
        </button>
        <button className="vote-button running" onClick={() => handleVote('running')}>
          Correr ({votes.running} votos)
        </button>
        <button className="vote-button swimming" onClick={() => handleVote('swimming')}>
          Natación ({votes.swimming} votos)
        </button>
        <button className="vote-button cycling" onClick={() => handleVote('cycling')}>
          Ciclismo ({votes.cycling} votos)
        </button>
      </div>
      <div className="vote-results">
        {/* Display vote percentages and bars */}
        <p>Fútbol: {getPercentage('football')}%</p>
        <div className="vote-bar football-bar" style={{ width: `${getPercentage('football')}%` }}></div>
        <p>Baloncesto: {getPercentage('basketball')}%</p>
        <div className="vote-bar basketball-bar" style={{ width: `${getPercentage('basketball')}%` }}></div>
        <p>Tenis: {getPercentage('tennis')}%</p>
        <div className="vote-bar tennis-bar" style={{ width: `${getPercentage('tennis')}%` }}></div>
        <p>Gimnasio: {getPercentage('gym')}%</p>
        <div className="vote-bar gym-bar" style={{ width: `${getPercentage('gym')}%` }}></div>
        <p>Correr: {getPercentage('running')}%</p>
        <div className="vote-bar running-bar" style={{ width: `${getPercentage('running')}%` }}></div>
        <p>Natación: {getPercentage('swimming')}%</p>
        <div className="vote-bar swimming-bar" style={{ width: `${getPercentage('swimming')}%` }}></div>
        <p>Ciclismo: {getPercentage('cycling')}%</p>
        <div className="vote-bar cycling-bar" style={{ width: `${getPercentage('cycling')}%` }}></div>
      </div>
    </div>
  );
}

export default SportVisitCounter;
