function getValues() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    return { num1, num2 };
}

function setResult(result) {
    document.getElementById("result").innerHTML = result;
}

function getResult() {
    return document.getElementById("result").innerHTML;
}

function add() {
    const { num1, num2 } = getValues();
    setResult(parseFloat(num1) + parseFloat(num2));
}

function subtract() {
    const { num1, num2 } = getValues();
    setResult(parseFloat(num1) - parseFloat(num2));
}

function multiply() {
    const { num1, num2 } = getValues();
    setResult(parseFloat(num1) * parseFloat(num2));
}

function divide() {
    const { num1, num2 } = getValues();
    setResult(parseFloat(num1) / parseFloat(num2));
}

function sqrt() {
    const { num1 } = getValues();
    setResult(Math.sqrt(parseFloat(num1)));
}

function pow() {
    const { num1, num2 } = getValues();
    setResult(Math.pow(parseFloat(num1), parseFloat(num2)));
}

function abs() {
    const { num1 } = getValues();
    setResult(Math.abs(parseFloat(num1)));
}

function random() {
    const { num1, num2 } = getValues();
    setResult(Math.floor(Math.random() * (parseFloat(num2) - parseFloat(num1) + 1)) + parseFloat(num1));
}

function round() {
    setResult(Math.round(getResult()));
}

function floor() {
    setResult(Math.floor(getResult()));
}

function ceil() {
    setResult(Math.ceil(getResult()));
}