function employees(names) {
    let workers = {};
    for (let i = 0; i < names.length; i++) {
        
        workers[names[i]] = names[i].length;
    }

    for (let key of Object.keys(workers)) {
        console.log(`Name: ${key} -- Personal Number: ${workers[key]}`)
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])