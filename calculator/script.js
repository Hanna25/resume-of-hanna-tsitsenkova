let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let ceBtn = document.querySelector('#ce');
let cBtn = document.querySelector('#c');
let dot = document.querySelector('#decimal');
let squareRootBtn = document.querySelector('#square-root');
let exponentiationBtn = document.querySelector('#exponentiation');
let signChangeBtn = document.querySelector('#sign-change');
let display = document.querySelector('.calc-display-input');
let currentNum = 0;
let newNumber = false;
let nextOperations = '';


for (let i = 0; i < numbers.length; i += 1) {
  numbers[i].addEventListener('click',  function() {  
    addDisplayValue(numbers[i].innerText)
  }); 
}
for (let i = 0; i < operators.length; i += 1) {
  operators[i].addEventListener('click',  function() {  
    calculations(operators[i].innerText)
  }); 
}

dot.addEventListener('click', function() {
  addDot();
});
ceBtn.addEventListener('click', function() {
  clearDesplay();
});

cBtn.addEventListener('click', function() {
  clearRememberDesplay();
});

squareRootBtn.addEventListener("click", function() {
  calculateSquareRoot();
});

signChangeBtn.addEventListener("click", function() {
  signChangeNum();
});

let addDisplayValue = function(el) {
  if (newNumber) {
    display.value = el;
    newNumber = false;
  } else {
    if (display.value === '0') {
      display.value = el;
    } else {
      display.value += el;
    }
  }
};

let calculations = function(el) {
  let localOperation = display.value;
  let currentNumScore = currentNum.toString().includes('.') ? (currentNum.toString().split('.').pop().length) : (0);
  if (newNumber && nextOperations !== '=') {
    display.value = currentNum; 
  } else {
    newNumber = true;
    if (nextOperations === '/') {
      currentNum /= parseFloat(localOperation);
    } else if (nextOperations === '*') {
      currentNum *= parseFloat(localOperation);
    } else if (nextOperations === '-') {
      currentNum -= parseFloat(localOperation);
    } else if (nextOperations === '+') {
      currentNum += parseFloat(localOperation);
    } else if (nextOperations === "^") {
      currentNum **= parseFloat(localOperation);  
    } else {
      currentNum = parseFloat(localOperation);
    }
    let localOperationScore = localOperation.toString().includes('.') ? (localOperation.toString().split('.').pop().length) : (0);     
    let result;
    if (nextOperations === '/') {
      result = currentNum;    
    } else if (nextOperations === '^') {
      result = currentNum.toFixed(localOperation * currentNumScore);    
    } else if (nextOperations === '*') {
      result = currentNum.toFixed(currentNumScore + localOperationScore);
    } else if (localOperationScore > currentNumScore) {
      result = currentNum.toFixed(localOperationScore);        
    } else {
      result = currentNum.toFixed(currentNumScore);      
    }   
    
    display.value = parseFloat(result)

    nextOperations = el;     
  }
}

let calculateSquareRoot = function() {
  let localOperation = display.value;
  if (Math.sign(localOperation) === -1) {
    currentNum = 'error';
  } else if (Math.sign(currentNum) === -1) {
    currentNum = -1 * parseFloat(currentNum);
  } else {   
    // newNumber = true; 
    currentNum  = Math.sqrt(parseFloat(localOperation));
  }
  display.value = currentNum;
};

let signChangeNum = function() {
  let localOperation = display.value;
  let negativeNum = 0;
  if (Math.sign(localOperation) === 1) {
    negativeNum = -1 * parseFloat(localOperation);
  } else if (Math.sign(localOperation) === -1) {
    negativeNum = -1 * parseFloat(localOperation);
  } else if (Math.sign(currentNum) === -1) {
    negativeNum = -1 * parseFloat(currentNum);
  } 
   display.value = negativeNum;
}

let addDot = function() {
  let localOperation = display.value;
  if (newNumber) {
    localOperation = '0.';
    newNumber = false;
  } else {
    if (localOperation.indexOf('.') === -1) {
      localOperation += '.'
    }
  };
  display.value = localOperation;
}

let clearDesplay = function() {
  display.value = 0;
  newNumber = true;
}

let clearRememberDesplay = function() {
  display.value = 0;
  newNumber = true;
  currentNum = 0;
  nextOperations = '';
}

