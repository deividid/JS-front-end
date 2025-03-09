function perfectNumber(number) {
    let sumOfDevisitor = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            sumOfDevisitor += i;
        }
    }

    if (sumOfDevisitor == number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.")
    }
}