import React from "react";

import StatsChart from "./StatsChart";

import "./StatsModal.css";

const StatsModal = (props) => {
  const gameData = JSON.parse(window.localStorage.getItem("lifetime-stats"));
  const statsToClipboard = () => {
    const text = `CODE-LE Game #${gameData.gamesPlayed}
Games won: ${gameData.gamesWon}
Avg. Guesses: ${gameData.averageGuesses}`;

    navigator.clipboard.writeText(text);
  };

  return (
    <div className="overlay" onClick={props.onClick}>
      <div className="stats-card">
        <h3>STATISTICS</h3>
        <div className="stats">
          <div className="data-card">
            <p>Played</p>
            <p className="data">{gameData.gamesPlayed}</p>
          </div>
          <div className="data-card">
            <p>Win %</p>
            <p className="data">{gameData.winPercentage}</p>
          </div>
          <div className="data-card">
            <p>Games Won</p>
            <p className="data">{gameData.gamesWon}</p>
          </div>
          <div className="data-card">
            <p>Avg. Guesses</p>
            <p className="data">{gameData.averageGuesses}</p>
          </div>
        </div>
        <div className="chart">
          <StatsChart guesses={gameData.guesses} />
        </div>
        <div className="sharing-is-caring">
          <button className="stats-btn">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web"
              target="_none"
            >
              Study the Docs
            </a>
          </button>
          <button className="stats-btn" onClick={statsToClipboard}>
            Share Stats
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsModal;
