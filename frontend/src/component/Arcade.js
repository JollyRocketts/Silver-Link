import React from 'react';

const games = [
  {
    name: '2048',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg',
    link:'https://play2048.co/'
  },
  {
    name: 'Sudoku',
    imageUrl: 'https://hollandnumerics.org.uk/wordpress/wp-content/uploads/2016/01/sudoku6_web.png',
    link: 'http://127.0.0.1:5503/index.html'
  },
  {
    name: 'Tic Tac Toe',
    imageUrl: 'https://cdn-images-1.medium.com/v2/resize:fit:800/1*d4FOXNGI6AbMeZh7T0andA.jpeg',
    link: 'http://127.0.0.1:5501/game.html'
  },
  {
    name: 'Crossword',
    imageUrl: 'https://thewordsearch.com/v4/img/word-search-puzzle.png',
    link: 'https://lrusso.github.io/WordSearch/WordSearch.htm'
  }

];

const Arcade = () => {
  const handleClick = (game) => {
 
    if (game.link) {
      window.open(game.link, '_blank');
    }
  };

  return (
    <div style={arcadeContainerStyle}>
      {games.map((game, index) => (
        <div key={index} style={gameTileStyle} onClick={() => handleClick(game)}>
          <img src={game.imageUrl} alt={game.name} style={gameImageStyle} />
          <div style={gameNameStyle}>{game.name}</div>
        </div>
      ))}
    </div>
  );
};

const arcadeContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const gameTileStyle = {
  flex: '0 0 calc(50% - 20px)', // Two games in a row
  maxWidth: 'calc(50% - 20px)',
  width: 'calc(50% - 20px)',
  textDecoration: 'none',
  margin: '10px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const gameImageStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '150px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const gameNameStyle = {
  marginTop: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#3246a8',
};

export default Arcade;
