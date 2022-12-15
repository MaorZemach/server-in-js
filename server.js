const express = require("express");
const app = express();
const { calculate } = require("./calculate");
const{stack_calculate}=require("./stack_calculate");
const { operations } = require("./operations");
const { stack } = require("./stack");

// body-parser
app.use(express.json());

app.post("/independent/calculate", (req, res) => {
  try {
    const { arguments, operation } = req.body;
    const result = calculate(arguments, operation);
    return res.json({ result });
  } catch (err) {
    return res.status(409).json({ "error-message": err.message });
  }
});

app.get("/stack/size", (req, res) => {
  return res.json({ result: stack.length() });
});

app.put("/stack/arguments", (req, res) => {
  const { arguments } = req.body;
  for (const arg of arguments) {
    stack.push(arg);
  }
  return res.json({ result: stack.length() });
});

app.get("/stack/operate", (req, res) => {
  const { operation } = req.query;
 const stack_res=stack_calculate(stack,operation);
  return res.json({stack_res});
  //return res.json({ result: operations[operation](x, y) });
});

app.delete("/stack/arguments", (req, res) => {
  try {
    const { count } = req.query;
    if (count > stack.length()) {
      throw new Error(
        `Error: cannot remove ${count} from the stack. It has only ${stack.length()} arguments`
      );
    }
    for (let i = count; i > 0; i--) {
      stack.pop();
    }
    return res.json({ result: stack.length() });
  } catch (err) {
    return res.status(409).json({ "error-message": err.message });
  }
});

const port = 8496;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
