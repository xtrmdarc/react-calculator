import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { btnName } = props;

  return (
    <button type="button">
      {btnName}
    </button>
  );
};

Button.defaultProps = {
  btnName: '',
};

Button.propTypes = {
  btnName: PropTypes.string,
};

export default Button;
