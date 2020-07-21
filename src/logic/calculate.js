import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;

  if (['+', '-', 'X', '%', '÷'].includes(buttonName)) {
    total = operate(total, next, operation);
    operation = buttonName;
    next = null;
  }

  if (parseInt(buttonName, 10) || buttonName === '.') {
    if (operation === null) {
      total = `${total}${buttonName}`;
    } else {
      next = `${next}${buttonName}`;
    }
  }

  switch (buttonName) {
    case '+/-': {
      total *= -1;
      next *= -1;
      break;
    }
    case 'AC': {
      total = 0;
      next = null;
      operation = null;
      break;
    }
    case '=': {
      total = operate(total, next, operation);
      next = null;
      operation = null;
      break;
    }
    default: {
      break;
    }
  }
  return { total, next, operation };
};

export default calculate;
