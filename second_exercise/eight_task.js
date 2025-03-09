function pascalCase(text) {
    let firstCapital = 0;
    let resultList = [];
    for (let i = 1; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            resultList.push(text.slice(firstCapital, i));
            firstCapital = i;
        }
        if (i == text.length - 1) {
            resultList.push(text.slice(firstCapital))
        }
    }
    console.log(resultList.join(', '));
}

pascalCase('HelloThereHandsome')