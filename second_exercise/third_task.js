function names(list) {
    list = list.sort((a, b) => a.localeCompare(b))
    for (let i = 1; i <= list.length; i++) {
        console.log(`${i}.${list[i - 1]}`)
    }
}

names(['Anna', 'Zick', 'Bob', 'Kurt'])