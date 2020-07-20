import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles';

const Display = props => {
  const { result } = props;

  return (
    <div style={Styles.display}>
      {result}
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
