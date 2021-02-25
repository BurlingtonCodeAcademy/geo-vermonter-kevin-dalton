import React from 'react'

export default function MainButtons ({startGame, guess, quit}) {
  
  return (
    <div>
      <button onClick={startGame}>Start a Game</button>
      <button onClick={guess}>Guess the Sport</button>
      <button onClick={quit}>I Give Up!</button>
    </div>
  )
}