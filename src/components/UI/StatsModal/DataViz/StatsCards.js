import React from "react";

const StatsCards = (props) => {
  const gameData = props.gameData;
  
    return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default StatsCards;
