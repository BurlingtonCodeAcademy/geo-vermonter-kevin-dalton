import "./styles/App.css";
import { useState } from "react";
import Map from "./components/Map";
import leafletPip from "leaflet-pip";
import { L, GeoJson } from "leaflet";

//------------------------------Lat Lon variables-----------------///
let randLat = randLatGen(45.007561302382754, 42.730315121762715);
let randLon = randLonGen(-73.26, -71.28);
let playerScore = 100;
let newCenter = [randLat, randLon]

//---------------------------leaflet pip...idk-----------------------------//
// let point = leafletPip.pointInLayer([randLon, randLat], );

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

  // console.log(persistentLat, persistentLon)

  function startGame() {
    toggleDisable();
    setZoom(18);
    // setCenter([randLat, randLon]);
    setCenter(newCenter)
    console.log(newCenter)
  }

  function toggleDisable() {
    document.getElementById("start-button").disabled = true;
    document.getElementById("guess").disabled = false;
    document.getElementById("quit").disabled = false;
  }

  function MainButtons() {
    //-------------------------move functions----------------//

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

    function returnCenter() {
      setCenter(newCenter)
    }

    function guess() {}

    function quit() {}

    return (
      <>
        <div>
          <button id="start-button" onClick={startGame}>
            Start a Game
          </button>
          <button disabled={true} id="guess" onClick={guess}>
            Guess the Sport
          </button>
          <button disabled={true} id="quit" onClick={quit}>
            I Give Up!
          </button>
        </div>

        <div id="nav-buttons">
          <button onClick={moveEast}>East</button>
          <button onClick={moveWest}>West</button>
          <button onClick={moveNorth}>North</button>
          <button onClick={moveSouth}>South</button>
          <button onClick={returnCenter}>Return to First Point</button>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Map center={center} zoom={zoom} />
      </div>

      <div id="gameButtons">
        <MainButtons />
      </div>
    </>
  );
}

export default App;
