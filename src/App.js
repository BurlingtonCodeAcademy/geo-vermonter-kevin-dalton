import "./styles/App.css";
import { useState } from "react";
import Map from "./components/Map";
import leafletPip from "leaflet-pip";
import { L, GeoJson } from "leaflet";
import Modal from "./components/Modal";

//----------------Initializing Lat/Long variables and score variable-----------------///
let randLat = randLatGen(45.007561302382754, 42.730315121762715);
let randLon = randLonGen(-73.26, -71.28);
let playerScore = 100;
let startCenter = [randLat, randLon];


//---------Functions to generate lat and long of random point-----//
function randLonGen(min, max) {
  let randLon = Math.random() * (max - min) + min;
  return randLon;
}

function randLatGen(min, max) {
  let randLat = Math.random() * (max - min) + min;
  return randLat;
}

//--------------------deducts players point by the passed argument-----------//
function playerDeductPoint(points) {
  let newScore = playerScore - points;
  playerScore = newScore;
  console.log(newScore);
}

//----------------------------Main App Function---------------------------------//

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);

  
//-----Function to start game, enable/disable buttons, and zoom in to random point---//
  function startGame() {
   // toggleDisable(); Working on this function
    setZoom(18);
    setCenter(startCenter);
  }
//-------------Function to disable/enables when game starts. Working on disabling directional buttons---//
  function toggleDisable() {
    document.getElementById("start-button").disabled = true;
    document.getElementById("guess").disabled = false;
    document.getElementById("quit").disabled = false;
    // document.getElementById('East').disabled= false;
    // document.getElementById('West').disabled= false;
    // document.getElementById('North').disabled = false;
    // document.getElementById('South').disabled = false;
    // document.getElementById('Return').disabled = false;
  }
//-------------Function to set up Start, Quit, Guess, and Navigation buttons, with Divs to allow targeted CSS---------//
  function MainButtons() {
    return (
      <div id="allButtons">
        <h3 class= "needsBG">Movement Buttons</h3>
        <div id="nav-buttons">
        
          <div id="top">
            <button id="North" class="nav-buttons" onClick={moveNorth}>
              North
            </button>
          </div>
    {/* Div for East, West, And Center */}
          <div id="mid3">
            <button id="West" class="nav-buttons" onClick={moveWest}>
              West
            </button>
            <button id="Return" class="nav-buttons" onClick={returnCenter}>
              Start Point
            </button>
            <button id="East" class="nav-buttons" onClick={moveEast}>
              East
            </button>
          </div>

          <div id="bottom">
            <button id="South" class="nav-buttons" onClick={moveSouth}>
              South
            </button>
          </div>
        </div>

        <div id = "score" class= "needsBG">
        <h4>{`Player Score: ${playerScore}`}</h4>
        </div>
{/* Div for Play and Quit Buttons and Dropdown Modal for Guessing county */ }
        <div id="playButtons">
          <h3 class= "needsBG">GamePlay Options</h3>
          <button id="start-button" onClick={startGame}>
            Start a Game
          </button>
          <Modal />
          <button disabled={false} id="quit">
            I Give Up!
          </button>
        </div>
      </div>
    );

    //-------------------------functions to move center and deduct point from score----------------//

    function moveEast() {
      randLon = randLon + 0.002;
      setCenter([randLat, randLon]);
      playerDeductPoint(1);
    }

    function moveWest() {
      randLon = randLon - 0.002;
      setCenter([randLat, randLon]);
      playerDeductPoint(1);
    }

    function moveNorth() {
      randLat = randLat + 0.002;
      setCenter([randLat, randLon]);
      playerDeductPoint(1);
    }

    function moveSouth() {
      randLat = randLat - 0.002;
      setCenter([randLat, randLon]);
      playerDeductPoint(1);
    }
//-------Function to return to original random point------//
    function returnCenter() {
      setCenter(startCenter);
    }
  }

 

  
//-------------Returns Map and Buttons to page----------//
  return (
    <body>
      <h2>If You Were Dropped in Rural Vermont, Could You Find Out What County You're in?</h2> 
      <div id="gameButtons">
        <MainButtons />
      </div>

      <div id="mapDiv">
        <Map center={center} zoom={zoom} />
      </div>
    </body>
  );
}

export default App;
