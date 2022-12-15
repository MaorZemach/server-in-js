exports.operations = {
  plus: (x, y) => x + y,
  minus: (x, y) => x - y,
  times: (x, y) => x * y,
  divide: (x, y) => {
    if (y === 0) {
      throw new Error("Error while performing operation Divide: division by 0");
    }
    return Math.floor(x / y);
  },
  pow: (x, y) => x ** y,
  abs: (x) => Math.abs(x),
  fact: (x) => {
    if (x < 0) {
      throw new Error(
        "Error while performing operation Factorial: not supported for the negative number"
      );
    }
    let result = 1;

    for (let i = 1; i <= x; i++) {
      result *= i;
    }

    return result;
  },
};
