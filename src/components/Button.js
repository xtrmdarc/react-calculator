import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles';

const Button = props => {
  const handleClick = (buttonName) => {
    return props.clickHandler(buttonName);
  }
  
  const { btnName, wide, color } = props;
  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
    ...Styles.button,
  };

  return (
    <button type="button" style={style} onClick={() => handleClick(btnName)}>
      {btnName}
    </button>
  );
};

Button.defaultProps = {
  btnName: '',
  color: '#f5913e',
  wide: false,
};

Button.propTypes = {
  btnName: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
