function palindrome(numbers) {
    for (let n of numbers) {
        stringN = String(n);
        if (stringN == stringN.split("").reverse().join("")) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
 }