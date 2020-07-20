import operate from './operate';

const calculate = (calc, buttonName) => {
  if (['+', '-', 'X', '%', '÷'].includes(buttonName))
    return operate(calc.total, calc.next, buttonName);
};

export default calculate;