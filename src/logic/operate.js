// import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  switch (operation) {
    case 'X': {
      result = numberOne * numberTwo;
      break;
    }
    case '+': {
      result = numberOne + numberTwo;
      break;
    }
    case '-': {
      result = numberOne - numberTwo;
      break;
    }
    case '%': {
      result = numberOne % numberTwo;
      break;
    }
    case '÷': {
      result = numberOne / numberTwo;
      break;
    }
    default: {
      result = 0;
    }
  }
  return result;
};

export default operate;
