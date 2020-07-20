// import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  numberOne = Big(numberOne);
  numberTwo = Big(numberTwo);

  switch (operation) {
    case 'X': {
      result = numberOne.times(numberTwo);
      break;
    }
    case '+': {
      result = numberOne.plus(numberTwo);
      break;
    }
    case '-': {
      result = numberOne.minus(numberTwo);
      break;
    }
    case '%': {
      result = numberOne.mod(numberTwo);
      break;
    }
    case '÷': {
      result = numberOne.div(numberTwo);
      break;
    }
    default: {
      result = total;
      break;
    }
  }
  return result;
};

export default operate;
