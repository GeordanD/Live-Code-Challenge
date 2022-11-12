const operators = ["-", "+", "*", "/"];

class Calculate {
  constructor() {
    this.total = 0;
    console.log("initial total: ", this.total);
  }
  //add
  addNumbers(a, b) {
    return (this.total = a + b);
  }

  //subtract

  subtractNumbers(a, b) {
    return (this.total = a - b);
  }
  //multiply
  multiplyNumbers(a, b) {
    return (this.total = a * b);
  }

  //divide
  divideNumbers(a, b) {
    return (this.total = a / b);
  }
}

let firstCalculation = new Calculate();
console.log(firstCalculation.addNumbers(10, 20));

class App {
  constructor() {
    this.calc = new Calculate();
    //prompts (3)

    //store first number
    this.firstPrompt = prompt("Please enter your first number");
    this.firstNumber = parseInt(this.firstPrompt);
    console.log(typeof this.firstNumber, this.firstNumber);
    // store the operator
    this.operator = prompt("Please enter an operator  (+, -, *, /)");
    console.log(this.operator);
    // store the second number
    this.secondPrompt = prompt("Please enter your second number");
    this.secondNumber = parseInt(this.secondPrompt);
    console.log(typeof this.secondNumber, this.secondNumber);

    if (this.operator != operators) {
      console.log("error Please enter an operator (+, -, *, /)");
    }
  }

  //call the calculations above
  callCalculations() {
    switch (this.operator) {
      case "+":
        this.calc.addNumbers(this.firstNumber, this.secondNumber);
        break;
      case "-":
        this.calc.subtractNumbers(this.firstNumber, this.secondNumber);
        break;
      case "*":
        this.calc.multiplyNumbers(this.firstNumber, this.secondNumber);
        break;
      case "/":
        this.calc.divideNumbers(this.firstNumber, this.secondNumber);
        break;
      default:
        alert("invalid number or operator");
        break;
    }
  }

  displayResult() {
    this.equation = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calc.total}`;

    if (operators.indexOf(this.operator)) {
      alert(this.equation); 
          console.log(this.equation);
    } else {
      alert("error Please enter an operator (+, -, *, /)");
        // console.log("error Please enter an operator (+, -, *, /)");
    }


  }

  // display the results of the calculation
}
let startApp = new App();
startApp.callCalculations();
startApp.displayResult();
