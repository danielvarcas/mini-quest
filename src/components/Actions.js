import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ onClick }) => {
  return (
    <React.Fragment>
      <div>
        <button onClick={() => onClick()}>Attack!</button>
      </div>
    </React.Fragment>
  );
};

Actions.propTypes = {
  onClick: PropTypes.func
}

export default Actions;