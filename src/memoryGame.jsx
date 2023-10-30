import React, { useState, useEffect } from "react";

const cards = ["🍎", "🍊", "🍋", "🍇", "🍉", "🍓", "🥥", "🍒", "🍌"];

const MemoryGame = () => {
  const [grid, setGrid] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const handleItemClick = (card) => {
    if (clickedCards.includes(card)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, card]);
    }
    setGrid(shuffleArray(cards));
  };

  useEffect(() => {
    setGrid(shuffleArray(cards));
  }, []);

  return (
    <>
      <div className="memory-game">
        <div className="scoreboard">
          <p>Score: {score}</p>
          <p>High Score: {highScore}</p>
        </div>
        <div className="grid-container">
          {grid.map((symbol, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleItemClick(symbol)}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MemoryGame;
