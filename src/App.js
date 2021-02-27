import "./styles/App.css";
import { useState } from "react";
import Map from "./components/Map";
import leafletPip from "leaflet-pip";

function App() {

  const [center, setCenter] = useState([43.88, -72.7317]);

  const [zoom, setZoom] = useState(8);

  function MainButtons() {

    //------------------------------Might Bring these variables now-----------------///
    // let randLat = randLatGen(45.007561302382754, 42.730315121762715);
    // let randLon = randLonGen(-73.26, -71.28);


    //---------------------------leaflet pip...idk-----------------------------//
    // let point = leafletPip.pointInLayer([-88, 38], gjLayer);

    function randLonGen(min, max) {
      let randLon = Math.random() * (max - min) + min;
      return randLon;
    }

    function randLatGen(min, max) {
      let randLat = Math.random() * (max - min) + min;
      return randLat;
    }

    function toggleDisable() {
      document.getElementById("start-button").disabled = true;
      document.getElementById("guess").disabled = false;
      document.getElementById("quit").disabled = false;
    }


    //-------------------------move functions not working----------------//
    // function north () {

    // }

    // function moveEast() {
    //   let RandLat = randLat
    //   let RandLon = randLon


    //   setCenter([RandLat + .002, RandLon]);
    // }

    function startGame() {
      toggleDisable();
      setZoom(18);
      // setCenter([randLat, randLon]); //commenting out to try to get buttons working.
      setCenter([randLatGen(45.007561302382754, 42.730315121762715), randLonGen(-73.26, -71.28)])
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

        {/* <div>
          <button onClick={moveEast}>east</button>
        </div> */}
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
