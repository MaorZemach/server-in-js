const { operations } = require("./operations");


function calculate(arguments, operation) {
  const op = operation.toLowerCase();
  const [a, b] = arguments;
 // if (arguments.length > 2) {
   // throw new Error(
     //   `Error: Too many ${operation}`
      //);
  //}
  let res;
  switch (op) {
    case "plus":
      if (a === undefined || b === undefined) {
        throw new Error(
          `Error: Not enough arguments to perform the operation ${operation}`
        );
      }
      res = operations.plus(a, b);
      break;
    case "minus":
      if (a === undefined || b === undefined) {
        throw new Error(
          `Error: Not enough arguments to perform the operation ${operation}`
        );
      }
      res = operations.minus(a, b);
      break;
    case "times":
      if (a === undefined || b === undefined) {
        throw new Error(
          `Error: Not enough arguments to perform the operation ${operation}`
        );
      }
      res = operations.times(a, b);
      break;
    case "divide":
      if (a === undefined || b === undefined) {
        throw new Error(
          `Error: Not enough arguments to perform the operation ${operation}`
        );
      }
      res = operations.divide(a, b);
      break;
    case "pow":
      if (a === undefined || b === undefined) {
        throw new Error(
          `Error: Not enough arguments to perform the operation ${operation}`
        );
      }
      res = operations.pow(a, b);
      break;
    case "abs":
      if (a === undefined) {
        throw new Error(
          `Error: Not enough arguments to perform the operation ${operation}`
        );
      }
      res = operations.abs(a);
      break;
    case "fact":
      res = operations.fact(a);
      break;
    default:
      throw new Error(`Error: unknown operation: ${operation}`);
  }
  return res;
}


exports.calculate = calculate;

