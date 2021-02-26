import './styles/App.css';
import { useState } from 'react'
import MainButtons from './components/Buttons/MainButtons'
/*import PlayButton from './components/Buttons/PlayButton'
import GuessButton from './components/Buttons/GuessButton'
import QuitButton from './components/Buttons/QuitButton'*/
import ChangeView from "./components/Buttons/ChangeView"

import Map from './components/Map'


function App() {

  const [center, setCenter] = useState([43.88, -72.7317])
  // const [center, setCenter] = useState([43.5, -72.555])

  const[zoom, setZoom] = useState(8)

  function MainButtons(){

    // const[disable, setDisabled] = useState(false)
    // const[enable, setEnabled] = useState(true)
  
  
    function toggleDisable() {
      document.getElementById('start-button').disabled = true;
      document.getElementById('guess').disabled = false;
      document.getElementById('quit').disabled = false;
    }
  
    
  
    function startGame(){
      toggleDisable();
      setZoom(18)
    }
  
    function guess(){
  
    }
  
    function quit(){
  
    }
  
    return (
      <div>
        <button id = "start-button" onClick={startGame}>Start a Game</button>
        <button disabled = {true} id = "guess" onClick={guess}>Guess the Sport</button>
        <button disabled = {true} id = "quit" onClick={quit}>I Give Up!</button>
      </div>
    )
  }

  return (
    <>
    <div>
      <Map center={center} zoom = {zoom} />
    </div>

    <div id = "gameButtons">
      <MainButtons/>
    </div>
    </>
);





    


  

  
}

export default App;
