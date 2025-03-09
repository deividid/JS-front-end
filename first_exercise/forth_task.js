function solve(number1, number2) {
    let result = '';
    let sum_of_numbers = 0;
    while (number1 <= number2) {
        result += number1 + " ";
        sum_of_numbers += number1
        number1 ++ 
    }
    console.log(result)
    console.log(`Sum: ${sum_of_numbers}`)
}