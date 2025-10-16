const screen = document.getElementById('screen');
let currentInput = " ";

function appendToDisplay(value) {
    currentInput += value;
    screen.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    screen.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    screen.value = currentInput;
}

function calculate() {
    try{
        currentInput = eval(currentInput).toString();
        screen.value = currentInput;
    }
    catch(err){
        screen.value = "error",err;
    }
}