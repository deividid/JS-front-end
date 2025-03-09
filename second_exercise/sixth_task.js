function modernTimes(text) {
    let listText = text.split(" ");
    let superRegex = /#[A-Za-z]+/;
    for (let t of listText) {
        if (superRegex.test(t)) {
            console.log(t.slice(1))
        }
    }
}

modernTimes("Some stupit #text")