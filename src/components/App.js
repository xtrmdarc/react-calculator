import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Styles from '../styles';
import Calculate from '../logic/calculate';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(Calculate(this.state, buttonName));
  }

  render() {
    return (
      <div style={Styles.calculator}>
        <Display calc={this.state} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
