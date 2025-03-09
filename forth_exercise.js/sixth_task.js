function match(data) {
    let lookup = data.shift().split(' ');
    let objMatch = {};

    for (let w of lookup) {
        objMatch[w] = 0;
    }

    for (let d of data) {
        if (d in objMatch) {
            objMatch[d] += 1;
        }
    }

    let sortedWords = Object.entries(objMatch).sort((a, b) => b[1] - a[1]);
    for (let s of sortedWords) {
        console.log(`${s[0]} - ${s[1]}`);
    }

}

match([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
])