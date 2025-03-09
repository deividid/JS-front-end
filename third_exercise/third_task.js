function charactersInRange(a, b) {
    let first = a.charCodeAt();
    let second = b.charCodeAt();
    let result = "";
    if (a.charCodeAt() > b.charCodeAt()) {
        first = b.charCodeAt();
        second = a.charCodeAt();
    }

    for (let i = first + 1; i < second; i++) {
        result += String.fromCharCode(i) + " ";
    }

    console.log(result.trim())
}