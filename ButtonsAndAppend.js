let equationDisplay = document.getElementById('equation-display');

function appendToDisplay(value) {
  equationDisplay.innerText += value;
}
// Event handling
document.getElementById('btn1').onclick = function () {
    appendToDisplay('1');
  };
  
  document.getElementById('btn2').onclick = function () {
    appendToDisplay('2');
  };
  
  document.getElementById('btn3').onclick = function () {
    appendToDisplay('3');
  };
  
  document.getElementById('btn4').onclick = function () {
    appendToDisplay('4');
  };
  
  document.getElementById('btn5').onclick = function () {
    appendToDisplay('5');
  };
  
  document.getElementById('btn6').onclick = function () {
    appendToDisplay('6');
  };
  
  document.getElementById('btn7').onclick = function () {
    appendToDisplay('7');
  };
  
  document.getElementById('btn8').onclick = function () {
    appendToDisplay('8');
  };
  
  document.getElementById('btn8').onclick = function () {
    appendToDisplay('9');
  };

  document.getElementById('btn0').onclick = function () {
    appendToDisplay('0');
  };
  
  document.getElementById('btnPlus').onclick = function () {
    appendToDisplay('+');
  };
  
  document.getElementById('btnMinus').onclick = function () {
    appendToDisplay('-');
  };
  
  document.getElementById('btnMultiply').onclick = function () {
    appendToDisplay('*');
  };
  
  document.getElementById('btnDivide').onclick = function () {
    appendToDisplay('/');
  };
  
  document.getElementById('btnDot').onclick = function () {
    appendToDisplay('.');
  };
  
  document.getElementById('btnEquals').onclick = function () {
    calculate();
  };
  
  document.getElementById('btnClear').onclick = function () {
    clearDisplay();
  };
  
  document.getElementById('btnDelete').onclick = function () {
    deleteLast();
  };
  