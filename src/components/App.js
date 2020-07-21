import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Styles from '../styles';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div style={Styles.calculator}>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
