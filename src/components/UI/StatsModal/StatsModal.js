import React from 'react';
import StatsChart from './DataViz/StatsChart';
import StatsCards from './DataViz/StatsCards';

import './StatsModal.css';

const StatsModal = (props) => {
  const gameData = JSON.parse(window.localStorage.getItem('lifetime-stats'));

  const statsToClipboard = () => {
    const text = `👾 CODE-LE Game #${gameData.gamesPlayed} 👾
Games won: ${gameData.gamesWon}
Avg. Guesses: ${gameData.averageGuesses}`;

    navigator.clipboard.writeText(text);
  };

  return (
    <div className='stats-overlay'>
      <div className='stats-card'>
        <h3>STATISTICS</h3>
        <div className='close-icon' onClick={props.onStats}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.1727 18.1726C17.5088 18.8365 16.4324 18.8365 15.7685 18.1726L1.2021 3.60625C0.53821 2.94235 0.538209 1.86597 1.2021 1.20208V1.20208C1.86599 0.538191 2.94237 0.538191 3.60626 1.20208L18.1727 15.7685C18.8366 16.4324 18.8366 17.5088 18.1727 18.1726V18.1726Z'
              fill='black'
            />
            <path
              d='M1.20208 18.1726C0.53819 17.5087 0.53819 16.4324 1.20208 15.7685L15.7685 1.20207C16.4324 0.53818 17.5088 0.538179 18.1726 1.20207V1.20207C18.8365 1.86596 18.8365 2.94234 18.1726 3.60623L3.60625 18.1726C2.94235 18.8365 1.86597 18.8365 1.20208 18.1726V18.1726Z'
              fill='black'
            />
          </svg>
        </div>
        <div className='stats'>
         {!!gameData && <StatsCards gameData={gameData}/>}
         {!gameData && <h1>No Game Data.</h1>}
        </div>
        <div className='chart'>
        {!!gameData && <StatsChart guesses={gameData.guesses} />}
        </div>
        <div className='sharing-is-caring'>
          {!!gameData && <button className='stats-btn' onClick={statsToClipboard}>
            Share Stats
          </button>}
        </div>
      </div>
    </div>
  );
};

export default StatsModal;