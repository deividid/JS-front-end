function solve(number) {
    numberToString = String(number);
    sumOfDigits = Number(numberToString.charAt(0));
    check = true
    for (let i = 1; i < numberToString.length; i++) {
        if (numberToString.charAt(i) != numberToString.charAt(i - 1)) {
            check = false;
        }
        sumOfDigits += Number(numberToString.charAt(i))
    }
    console.log(check)
    console.log(sumOfDigits)
}