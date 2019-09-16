import React, { useEffect, useState } from 'react';
import './app.scss';
import axios from 'axios';

import PlayerCard from './components/PlayerCard';
import NavBar from './components/NavBar';
import Form from './components/Form';

function App() {

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res)
      setPlayer(res.data)
    })
    .catch(err => console.log("Nope", err))
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <NavBar />
        </nav>
        <div className='form'>
          <Form />
        </div>
      </header>

      <div className='title'>
        <h1>Women's World Cup</h1>
      </div>
      <div>
        <h2 className='subtitle'>Players</h2>
      {player.map( (player, key) => 
        <PlayerCard playerInfo={player} key={player.id}/>
      )}
      </div>
    </div>
  );
}

export default App;
