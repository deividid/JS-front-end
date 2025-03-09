function divideFactorials(x, y) {
    
    function factorial(number) {
        let result = 1;
        for (let i = number; i > 1; i--) {
            result *= i;
        }
        return result;
    }

    console.log((factorial(x) / factorial(y)).toFixed(2))
}