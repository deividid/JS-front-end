function foundAMatch(word, sentance) {
    let text = sentance.split(" ");
    flag = false;
    for (let t of text) {
        if (t.toLowerCase() == word.toLowerCase()) {
            console.log(t);
            flag = true;
            break;
        }
    }
    if (flag == false) {
        console.log(`${word} not found!`)
    }
}