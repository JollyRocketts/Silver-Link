import React from 'react';
import './GameTile.css'; // Assuming you have a CSS file for styling

const GameTile = ({ game }) => {
  return (
    <a href={game.link} className="game-tile">
      <img src={game.imageUrl} alt={game.name} className="game-image" />
      <div className="game-name">{game.name}</div>
    </a>
  );
};

export default GameTile;
