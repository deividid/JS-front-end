function rotation(list, times) {
    for (let i = 0; i < times; i++) {
        let numb = list.shift();
        list.push(numb)
    }
    console.log(list.join(" "))
}

rotation([1, 2, 3, 4], 3)