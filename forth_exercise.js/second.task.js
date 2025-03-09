function solve(data) {
    let finalList = [];
    for (let d of data) {
        let text = d.split(" | ");
        let x = text[0];
        let y = Number(text[1]).toFixed(2);
        let z = Number(text[2]).toFixed(2);
        
        let newObj = {
            town: x,
            latitude: y,
            longitude: z,
        }
        finalList.push(newObj)
    }
    for (let o of finalList) {
        console.log(o)
    }
    
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])