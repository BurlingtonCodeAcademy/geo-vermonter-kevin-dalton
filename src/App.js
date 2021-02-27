import './styles/App.css';
import { useState } from 'react'
import Map from './components/Map'



function App() {

  // const mapRef = useState()

  const [center, setCenter] = useState([43.88, -72.7317])
 

  const[zoom, setZoom] = useState(8)


  function randomInt(min, max) {//function to generate a random number
    let range = max - min + 1;
    let randNum = Math.floor(Math.random() * range) + min;
    return randNum;
  }


  function randomLonGen(){

  }


  function MainButtons(){
  
  
    function toggleDisable() {
      document.getElementById('start-button').disabled = true;
      document.getElementById('guess').disabled = false;
      document.getElementById('quit').disabled = false;
    }
  
    // function handleOnSetView() {
    //   const { current = {} } = mapRef;
    //   const { leafletElement: map } = current;
  
    //   map.setView(center, 14);
    // }
    
  
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
      <Map center={center} zoom = {zoom}/>
    </div>

    <div id = "gameButtons">
      <MainButtons/>
    </div>
    </>
);





    


  

  
}

export default App;
