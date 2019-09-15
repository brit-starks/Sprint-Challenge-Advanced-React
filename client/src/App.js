import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

import PlayerCard from './components/PlayerCard';

function App() {

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res)
      setPlayer(res.data)
    })
    .catch(err => console.log("Nope", err))
  }, []);

  return (
    <div className="App">
      {/* <h1>Happy Coding</h1> */}
      {player.map( (player, key) => 
        <PlayerCard playerInfo={player} key={player.id}/>
      )}
    </div>
  );
}

export default App;
