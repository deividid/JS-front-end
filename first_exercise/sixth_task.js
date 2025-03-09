function solve(number) {
    let string_number = String(number);
    let result = 0;
    for (let i = 0; i < string_number.length; i++) {
        result += Number(string_number.charAt(i));
    }
    console.log(result)
}

solve(234)
