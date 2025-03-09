function fillTheDots(firstString, secondString) {
    let words = firstString.split(', ');
    
    for (let w of words) {
        let replacePos = '*'.repeat(w.length);
        secondString = secondString.replace(replacePos, w)
    }

    console.log(secondString)
}

fillTheDots('great', 'Sasho is a ***** guy')