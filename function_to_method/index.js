(function() {
  const calculator = {
    calculate: (x, y, fn) => {
      
      return fn(x, y);        
    }
  };

  const sum = (x, y) => {
    return x + y;
  };

  const diff = (x, y) => {
    return x - y;
  };

  const mult = (x, y) => {
    return x * y;
  };

  const div = (x, y) => {
    return x / y;
  };

  let num1 = 5;
  let num2 = 5;
  
  let sumResult = calculator.calculate(num1, num2, sum);
  console.log(`Sum result for ${num1} and ${num2} is ${sumResult}`);

  let diffResult = calculator.calculate(num1, num2, diff);
  console.log(`Difference result for ${num1} and ${num2} is ${diffResult}`);
  
  let multResult = calculator.calculate(num1, num2, mult);
  console.log(`Multiple result for ${num1} and ${num2} is ${multResult}`);
  
  let divResult = calculator.calculate(num1, num2, div);
  console.log(`Divide result for ${num1} and ${num2} is ${divResult}`);

}());