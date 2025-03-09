function parkingLot(data) {
    let cars = [];

    for (let d of data) {
        let text = d.split(', ')
        let carInLot = false;

        for (let i = 0; i < cars.length; i++) {
            if (text[1] == cars[i]) {
                carInLot = true;
                if (text[0] == "OUT") {

                    cars.splice(i, 1);
                }
            }
        }

        if (text[0] == "IN" && carInLot == false) {
            cars.push(text[1]);

        }

        carInLot = false;
    }

    if (cars.length == 0) {
        console.log("Parking Lot is Empty");

    } else {

        for (let car of cars.sort( (a, b) => a.localeCompare(b))) {
            console.log(car);
        }
    }
}

parkingLot(['IN, CA2844AA','IN, CA1234TA','OUT, CA2844AA','IN, CA9999TT','IN, CA2866HI','OUT, CA1234TA','IN, CA2844AA','OUT, CA2866HI','IN, CA9876HH','IN, CA2822UU']);

