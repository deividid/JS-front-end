function sorting(list) {
    let finalList = []
    while (list.length > 1) {
        let maxNumber = list[0];
        let minNumber = list[0];
        for (let i = 1; i < list.length; i++) {
            if (list[i] > maxNumber) {
                maxNumber = list[i];
            } 

            if (list[i] < minNumber) {
                minNumber = list[i];
            }
        }
        const maxIndex = list.indexOf(maxNumber);
        list.splice(maxIndex, 1);
        const minIndex = list.indexOf(minNumber);
        list.splice(minIndex, 1);
        finalList.push(minNumber);
        finalList.push(maxNumber);

    }
    if (list.length > 0) {
        finalList.push(list.pop())
    }
    return finalList
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))