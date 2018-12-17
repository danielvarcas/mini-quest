import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ stats, onClick }) => {
  return (
    <React.Fragment>
      <div>
        <img src="/link_sprite.png" height="100vh" alt="Link"></img>
        <table>
          <tbody>
            {Object.keys(stats).map((stat, i) => (
              <tr key={stat}>
                <th>{stat}:</th>
                <td>{stats[stat]}</td>
                <td><button onClick={() => onClick(stat)}>+1</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >
    </React.Fragment>
  );
};

Character.propTypes = {
  stats: PropTypes.object,
  onClick: PropTypes.func
}

export default Character;