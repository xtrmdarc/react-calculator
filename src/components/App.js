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
      result: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = Calculate(this.state, buttonName);
    this.setState(newState);
    if (newState.next === null)
      this.setState({result: newState.total});
    else this.setState({result: newState.next});
    console.log(this.state);
  }

  render() {
    return (
      <div style={Styles.calculator}>
        <Display result={this.state.result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
