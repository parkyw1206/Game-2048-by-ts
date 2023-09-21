import React from "react";

export default function Header(req: { score: number; bestScore: number }) {
  return (
    <div className="heading">
      <h1 className="title">2048</h1>
      <div className="scores-container">
        <div className="score-container">{req.score}</div>
        <div className="best-container">{req.bestScore}</div>
      </div>
    </div>
  );
}
