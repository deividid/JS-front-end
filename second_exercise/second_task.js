function getNthElementh(list, numb) {
    let resultList = [];
    for (let i = 0; i < list.length; i += numb) {
        resultList.push(list[i]);
    }
    return resultList;
}

getNthElementh([1, 2, 3, 4, 5, 6, 7], 2)