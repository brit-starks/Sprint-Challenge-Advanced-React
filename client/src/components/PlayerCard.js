import React from 'react';

const PlayerCard = (props) => {
  // console.log('PlayerCard.js: PROPS', props);

  return(
    <div className='player-wrapper'>
      <p className='player-name'>Name: {props.playerInfo.name}</p>
      <p className='player-country'>Country: {props.playerInfo.country}</p>
    </div>
  )
}

export default PlayerCard;