import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Styles from '../styles';

const App = () => (
  <div style={Styles.calculator}>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
