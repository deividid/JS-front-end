function oddEven(number) {
    let stringNumber = String(number);
    let oddSum = 0;
    let evenSum = 0;
    for (let n of stringNumber) {
        if (Number(n) % 2 == 0) {
            evenSum += Number(n);
        } else {
            oddSum += Number(n);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}