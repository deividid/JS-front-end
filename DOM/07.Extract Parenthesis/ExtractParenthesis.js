function extract(content) {
    const element = document.getElementById(content);
    const text = element.textContent
    let result = [];
    let start = 0;

    for (i = 0; i < text.length; i++) {
        if (text[i] == "(") {
            start = i;
        }

        if (text[i] == ")") {
            const newWord = text.slice(start + 1, i);
            result.push(newWord);
        }
    }

    return result.join('; ');


}  