import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  const nonUsefulBaseValues = ['0', null, 'ERROR'];

  if (total === 'ERROR') {
    total = '0';
    next = null;
  }

  if (['+', '-', 'X', '%', '÷'].includes(buttonName)) {
    total = operate(total, next, operation);
    operation = buttonName;
    next = null;
  }

  if (parseInt(buttonName, 10) || buttonName === '.' || buttonName === '0') {
    if (operation === null) {
      if (!(buttonName === '.' && /\./.test(total))) total = `${(nonUsefulBaseValues.includes(total)) ? '' : total}${buttonName}`;
    } else if (!(buttonName === '.' && /\./.test(next))) {
      next = `${(next === null || next === '0') ? '' : next}${buttonName}`;
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

  return { total, next, operation };
};

export default calculate;
