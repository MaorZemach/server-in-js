const { operations } = require("./operations");
const {stack}=require("./stack");


function stack_calculate(stack,operation){
    const op = operation.toLowerCase();
    let a=0;
    let b=0;
    let res;
   /* if (stack.length()> 2) {
      throw new Error(
          `Error: Too many ${operation}`
        );
    }*/
    switch (op) {
      case "plus":
        /*if(stack.length<2)
        {
          throw new Error(
            `Error: Not enough arguments to perform the operation ${operation}`);
        }
        else{*/
          a=stack.pop();
          b=stack.pop();
          res=operations.plus(a,b);
        //}
        break;
    
     case "minus":
     /* if(stack.length<2)
        {
          throw new Error(
            `Error: Not enough arguments to perform the operation ${operation}`);
        }
        else{*/
        a=stack.pop();
        b=stack.pop();
        res=operations.minus(a,b);
      //}
      break;
  
     case"times":
     //if(stack.length<2)
       // {
         // throw new Error(
           // `Error: Not enough arguments to perform the operation ${operation}`);
        //}
        //else{
          a=stack.pop();
          b=stack.pop();
          res=operations.times(a,b);
        //}
          break;
  
      case "divide":
      //  if(stack.length<2)
        //{
          //throw new Error(
            //`Error: Not enough arguments to perform the operation ${operation}`);
          //}
          //else{
            a=stack.pop();
            b=stack.pop();
            res=operations.divide(a,b);
          //}
          break;
          
      case "pow":
      //  if(stack.length<2)
        //{
          //throw new Error(
            //`Error: Not enough arguments to perform the operation ${operation}`);
          //}
          //else{
            a=stack.pop();
            b=stack.pop();
            res=operations.pow(a,b);
          //}
            break;
  
      case "abs":
       // if(stack.length()<1)
        //{
          //throw new Error(
            //`Error: Not enough arguments to perform the operation ${operation}`);
        //}
        //else{
          a=stack.pop();
          res=operations.abs(a);
        //}
            break;
            
      case "fact":
      //  if(stack.length()<1)
        //{
          //throw new Error(
            //`Error: Not enough arguments to perform the operation ${operation}`);
        //}
        //else{
          a=stack.pop();
          res=operations.fact(a);
        //}
            break;
            
      default :
           throw new Error(`Error: unknown operation: ${operation}`);
  
    }
    return res;
  }

  exports.stack_calculate=stack_calculate;
