import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Styles from '../styles';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    /* eslint-disable */
    this.state = {
      total: null,
      next: null,
      operation: null,
      result: null,
    };
    /* eslint-enable */
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => {
      const newState = Calculate(prevState, buttonName);
      let result;
      if (newState.next === null) result = newState.total;
      else result = newState.next;
      newState.result = result;
      return newState;
    });
  }

  render() {
    const { result } = this.state;
    return (
      <div style={Styles.calculator}>
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
