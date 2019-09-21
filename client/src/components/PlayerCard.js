import React from 'react';
import './player-card.scss';

const PlayerCard = (props) => {
  // console.log('PlayerCard.js: PROPS', props);

  return(
    <div className='player-wrapper'>
      <div className='player'>
        <p className='player-name'>Name: {props.playerInfo.name}</p>
        <p className='player-country'>Country: {props.playerInfo.country}</p>
        <p className='player-search'>Searches: {props.}</p>
      </div>
    </div>
  )
}

export default PlayerCard;