import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {

  if (['+', '-', 'X', '%', '÷'].includes(buttonName)) {
    total = operate(total, next, operation);
    operation = buttonName;
    next = null;
  }

  if (parseInt(buttonName) || buttonName == '.') {
    if (operation == null) {
      total = `${total ? total : ''}${buttonName}`;
    }
    else {
      next = `${next ? next : ''}${buttonName}`;
    }
  }

  switch (buttonName) {
    case '+/-' : {
      total *= -1;
      next *= -1;
      break;
    }
    case 'AC' : {
      total = 0;
      next = null;
      operation = null;
      break;
    }
    case '=' : {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
    default: break;
  }
  return { total, next, operation };
};

export default calculate;