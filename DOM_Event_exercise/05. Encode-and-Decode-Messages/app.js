function encodeAndDecodeMessages() {
    console.log('TODO...')

    const field = document.querySelectorAll('#main div');
    const messageInfo  = document.querySelectorAll('#main div textarea');
    const buttons = document.querySelectorAll('#main div button');




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

    buttons.forEach( (b) => b.addEventListener('click', (event) => {
        if (event.currentTarget.textContent == 'Encode and send it') {
            const text = messageInfo[0].value;
            messageInfo[1].value = encode(text);
            messageInfo[0].value = '';

        } else if(event.currentTarget.textContent == 'Decode and read it') {
            const text = messageInfo[1].value;
            messageInfo[1].value = decode(text);
        }
    }))
}