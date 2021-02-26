import './styles/App.css';
import { useState } from 'react'
import MainButtons from './components/Buttons/MainButtons'
/*import PlayButton from './components/Buttons/PlayButton'
import GuessButton from './components/Buttons/GuessButton'
import QuitButton from './components/Buttons/QuitButton'*/

import Map from './components/Map'
import gameMap from './components/gameMap'

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])

  return (
    <>
    <div>
      <Map center={center} />
    </div>

    <div id = "gameButtons">
      <MainButtons/>
    </div>
    </>
);





    function startGame() {
      
    }


  

  
}

export default App;
