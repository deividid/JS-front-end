function subtract() {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    let result = document.getElementById('result');

    let calculation = Number(firstNumber.value) - Number(secondNumber.value);

    result.textContent = calculation;
}