import React from "react";

export default function AboveGame() {
  return (
    <div className="above-game">
      <p className="game-intro">
        Join the tiles, get to <strong>2048!</strong>
        <br />
        <a href={"/"} className="how-to-play-link">
          How to play →
        </a>
      </p>
      <a href={"/"} className="restart-button">
        New Game
      </a>
    </div>
  );
}
