import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Styles from '../styles';

const ButtonPanel = props => {
  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <div style={Styles.panel}>
      <div style={Styles.rowPanel}>
        <Button btnName="AC" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="+/-" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="%" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="÷" clickHandler={handleClick} />
      </div>
      <div style={Styles.rowPanel}>
        <Button btnName="7" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="8" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="9" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="X" clickHandler={handleClick} />
      </div>
      <div style={Styles.rowPanel}>
        <Button btnName="4" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="5" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="6" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="-" clickHandler={handleClick} />
      </div>
      <div style={Styles.rowPanel}>
        <Button btnName="1" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="2" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="3" color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="+" clickHandler={handleClick} />
      </div>
      <div style={Styles.rowPanel}>
        <Button btnName="0" wide color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="." color="#e0e0e0" clickHandler={handleClick} />
        <Button btnName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
