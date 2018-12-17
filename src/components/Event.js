import React from 'react';

const Log = ({ currentMob }) => {
  return (
    <div>
      <p>Currently fighting:</p>
      <p>{currentMob.name.toUpperCase()}</p>
      <p>HP: {currentMob.hp} / {currentMob.maxHp}</p>
      <p>(Strength: {currentMob.strength} Magic: {currentMob.magic} Defense: {currentMob.defense})</p>
    </div>
  );
};

export default Log;