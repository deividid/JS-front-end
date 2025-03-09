function solve(number, operation1, operation2, operation3, operation4, operation5) {
    function calculate(number, op) {
        if (op == "chop") {
            number = number / 2;
        } else if (op == "dice") {
            number = Math.sqrt(number);
        } else if (op == "spice") {
            number ++;
        } else if (op == "bake") {
            number = number * 3;
        } else if (op == "fillet") {
            number = number * 0.8;
        }

        return number
    }
    number = Number(number);
    let number2 = calculate(number, operation1)
    console.log(number2)
    let number3 = calculate(number2, operation2)
    console.log(number3)
    let number4 = calculate(number3, operation3)
    console.log(number4)
    let number5 = calculate(number4, operation4)
    console.log(number5)
    let number6 = calculate(number5, operation5)
    console.log(number6)
    
}

solve('32', 'chop', 'chop', 'dice', 'bake', 'slice')