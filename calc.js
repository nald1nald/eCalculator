let result = document.getElementById(`result`);

function btnCalc(btn) {
  result.value += btn;
}

function clearResult() {
  result.value = ``;
}

function calculate() {
  const expression = result.value;
  if (expression) {
    let operator;
    let operand1 = ``;
    let operand2 = ``;
    let isOperatorFound = false;
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      if (char === `+` || char === `-` || char === `*` || char === `/`) {
        operator = char;
        isOperatorFound = true;
      } else {
        if (isOperatorFound) {
          operand2 += char;
        } else {
          operand1 += char;
        }
      }
    }

    let resultValue;
    if (operator === `+`) {
      resultValue = parseFloat(operand1) + parseFloat(operand2);
    } else if (operator === `-`) {
      resultValue = parseFloat(operand1) - parseFloat(operand2);
    } else if (operator === `*`) {
      resultValue = parseFloat(operand1) * parseFloat(operand2);
    } else if (operator === `/`) {
      resultValue = parseFloat(operand1) / parseFloat(operand2);
    }
    result.value = resultValue;
  }
}

let calc = document.getElementById(`myCalc`);
let button = document.getElementById(`calcBtn`);
calc.style.display = `none`;

function displayCalc() {
  if (calc.style.display === `none`) {
    calc.style.display = `flex`;
    button.textContent = "Hide Calculator";  
  } else {
    calc.style.display = `none`;
    button.textContent = "Use Calculator";
  }
}