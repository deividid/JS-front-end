function oddTimes(text) {
    let timesObj = {};
    let check = false;
    for (let t of text.split(' ')) {
        
        for (let [key, value] of Object.entries(timesObj)) {
            if (t.toLowerCase() === key) {
                timesObj[key] += 1;
                check = true;
            }
        }

        if (check == false) {
            timesObj[t.toLowerCase()] = 1;
        }

        check = false;
    }

    for (let [key, value] of Object.entries(timesObj)) {
        if (value % 2 == 0) {
            delete timesObj[key];
        }
    }

    console.log(Object.keys(timesObj).join(" "));
}

oddTimes('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')