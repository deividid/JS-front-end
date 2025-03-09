function makeMatrix(number) {
    for (let i = 0; i < number; i++) {
        result = `${number} `.repeat(number);
        console.log(result.trim())
    }
}

makeMatrix(4)