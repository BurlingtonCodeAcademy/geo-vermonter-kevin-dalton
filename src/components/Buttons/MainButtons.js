import React from 'react'
import { useState } from 'react'

export default function MainButtons ({guess, quit}) {

  // const[disable, setDisabled] = useState(false)
  // const[enable, setEnabled] = useState(true)


  function toggleDisable() {
    document.getElementById('start').disabled = true;
    document.getElementById('guess').disabled = false;
    document.getElementById('quit').disabled = false;
  }

  function startGame(){
    toggleDisable()
  }
  
  return (
    <div>
      <button id = "start" onClick={startGame}>Start a Game</button>
      <button disabled = {true} id = "guess" onClick={guess}>Guess the Sport</button>
      <button disabled = {true} id = "quit" onClick={quit}>I Give Up!</button>
    </div>
  )
}