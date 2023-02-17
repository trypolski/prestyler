module.exports = function(operandOne, operator, operandTwo, options) {
  let result = false;
  switch (operator) {
    case '===':
      result = operandOne === operandTwo;
      break;
    case '!==':
      result = operandOne !== operandTwo;
      break;
    case '&&':
      result = operandOne && operandTwo;
      break;
    case '||':
      result = operandOne || operandTwo;
      break;
    case '>':
      result = operandOne > operandTwo;
      break;
    case '>=':
      result = operandOne >= operandTwo;
      break;
    case '<':
      result = operandOne < operandTwo;
      break;
    case '<=':
      result = operandOne <= operandTwo;
      break;
  }

  if (result) {
    return options.fn(this);
  }
  return options.inverse(this);
}
