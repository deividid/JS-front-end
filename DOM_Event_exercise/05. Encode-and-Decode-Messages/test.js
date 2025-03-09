function encode(text) {
    let newMessage = '';

    for (let l of text) {
        const change = String.fromCharCode(l.charCodeAt(0) + 1);
        newMessage += change;
    }

    return newMessage;
}

function decode(encodedText) {
    let decodedMessage = '';

    for (let l of encodedText) {
        const change = String.fromCharCode(l.charCodeAt(0) - 1);
        decodedMessage += change;
    }

    return decodedMessage;
}



console.log(encode('Hello'));
console.log(decode(encode('Hello')));