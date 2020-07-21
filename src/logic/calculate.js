import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  console.log(calculator, buttonName);
  if (['+', '-', 'X', '%', '÷'].includes(buttonName)) {
    total = operate(total, next, operation);
    operation = buttonName;
    next = null;
  }

  if (parseInt(buttonName, 10) || buttonName === '.' || buttonName === '0') {
    if (operation === null) {
      total = `${(total === null || total === '0') ? '' : total}${buttonName}`;
    } else {
      next = `${(next === null || next === '0') ? '': next}${buttonName}`;
    }
  }

  switch (buttonName) {
    case '+/-': {
      if (total != null) {
        total *= -1;
        total = `${total}`;
      }
      if (next != null) {
        next *= -1;
        next = `${next}`;
      }
      break;
    }
    case 'AC': {
      total = '0';
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
  console.log( { total, next, operation });
  return { total, next, operation };
};

export default calculate;
