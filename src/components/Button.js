import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles';

const Button = props => {
  const { btnName } = props;
  const style = {
    width: props.wide ? '50%' : '25%',
    backgroundColor: props.color ? props.color.backgroundColor : '#f5913e',
  };

  return (
    <button type="button" style={ style }>
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
