import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const num1 = Big(numberOne ? numberOne : 0);
  const num2 = Big(numberTwo ? numberTwo : 0);

  switch (operation) {
    case 'X': {
      result = num1.times(num2);
      break;
    }
    case '+': {
      result = num1.plus(num2);
      break;
    }
    case '-': {
      result = num1.minus(num2);
      break;
    }
    case '%': {
      result = num1.mod(num2);
      break;
    }
    case '÷': {
      if(numberTwo === '0')
        result = 'ERROR'
      else
        result = num1.div(num2);
      break;
    }
    default: {
      result = num1;
      break;
    }
  }

  return result.toString();
};

export default operate;
