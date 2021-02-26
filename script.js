var numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operator'),
  decimalBtn = document.getElementById('decimalPoint'),
  clearBtns = document.querySelectorAll('.clear_btn'),
  minusBtn = document.getElementById('minus'),
  display = document.getElementById('display'),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false,
  MemoryPendingOperation = '';

for (var i=0; i<numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function(e) {
      numberPress(e.target.outerText);

  });
};

for (var i=0; i<operations.length; i++) {
    var operator = operations[i];
    operator.addEventListener('click', function(e) {
      operation(e.target.outerText);
      console.log(e);
    });
};

for (var i=0; i<clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function(e) {
    clear (e.srcElement.id)
  });
};

decimalBtn.addEventListener('click', decimal);

minusBtn.addEventListener('click', minus);

function numberPress(number) {
      if(MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
      } else {
        if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    };
  };
};

function operation(oper) {
  var localOperationMemory=display.value;

  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = parseInt(MemoryCurrentNumber * 100000) / 100000;
    sqr = document.getElementById('sqr');
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
    MemoryCurrentNumber += parseFloat(localOperationMemory);
  } else if (MemoryPendingOperation === '-') {
    MemoryCurrentNumber -= parseFloat(localOperationMemory);
  } else if (MemoryPendingOperation === '/') {
    MemoryCurrentNumber /= parseFloat(localOperationMemory);
  } else if (MemoryPendingOperation === '*') {
    MemoryCurrentNumber *= parseFloat(localOperationMemory);
  } else if (MemoryPendingOperation === '^') {
    MemoryCurrentNumber **= parseFloat(localOperationMemory);
  } else if (MemoryPendingOperation === '√') {
    MemoryCurrentNumber = Math.sqrt(localOperationMemory);
  } else {
    MemoryCurrentNumber = parseFloat(localOperationMemory);
  };
  display.value = parseInt(MemoryCurrentNumber * 100000) / 100000;
  MemoryPendingOperation = oper;
};
};

function minus(argument) {
  var val = document.querySelector('#display').value
  document.getElementById('display').value = parseInt(-Math.abs(val) * 1000) / 1000;
};

function decimal(argument) {
  var localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = '0';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    };
  };
  display.value = localDecimalMemory;
};

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    display.value ='0';
    MemoryNewNumber = false,
    MemoryPendingOperation = '';
  };
};