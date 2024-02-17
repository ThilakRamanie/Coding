exports.calculate = function (expression) {
  if (!expression) return undefined;
  const expressionArray = expression.split(" ");
  const operators = ["+", "-", "*", "/"];
  const calculatorStack = [];
  for (let index = expressionArray.length - 1; index >= 0; index--) {
    const element = expressionArray[index];
    if (!isNaN(parseInt(element))) calculatorStack.push(element);
    else if (operators.includes(element)) {
      const number1 = +calculatorStack.pop();
      const number2 = +calculatorStack.pop();
      const result = calculateResult(element, number1, number2);
      calculatorStack.push(result);
    } else {
      return "Something went wrong";
    }
  }
  return calculatorStack.pop();
};

function calculateResult(operator, number1, number2) {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return "Invalid operator";
  }
}
