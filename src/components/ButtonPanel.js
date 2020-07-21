import React from 'react';
import Button from './Button';
import Styles from '../styles';

const ButtonPanel = () => (
  <div style={Styles.panel}>
    <div style={Styles.rowPanel}>
      <Button btnName="AC" color="#e0e0e0" />
      <Button btnName="+/-" color="#e0e0e0" />
      <Button btnName="%" color="#e0e0e0" />
      <Button btnName="÷" />
    </div>
    <div style={Styles.rowPanel}>
      <Button btnName="7" color="#e0e0e0" />
      <Button btnName="8" color="#e0e0e0" />
      <Button btnName="9" color="#e0e0e0" />
      <Button btnName="X" />
    </div>
    <div style={Styles.rowPanel}>
      <Button btnName="4" color="#e0e0e0" />
      <Button btnName="5" color="#e0e0e0" />
      <Button btnName="6" color="#e0e0e0" />
      <Button btnName="-" />
    </div>
    <div style={Styles.rowPanel}>
      <Button btnName="1" color="#e0e0e0" />
      <Button btnName="2" color="#e0e0e0" />
      <Button btnName="3" color="#e0e0e0" />
      <Button btnName="+" />
    </div>
    <div style={Styles.rowPanel}>
      <Button btnName="0" wide color="#e0e0e0" />
      <Button btnName="." color="#e0e0e0" />
      <Button btnName="=" />
    </div>
  </div>
);

export default ButtonPanel;
