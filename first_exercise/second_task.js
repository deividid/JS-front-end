function solve(total, people, day) {
    let result = 0;
    if (day == "Friday") {
        if (people == "Students") {
            result = total * 8.45;
        } else if (people == "Regular") {
            result = total * 15;
        } else if (people == "Business") {
            result = total * 10.9;
        }
    } else if (day == "Saturday") {
        if (people == "Students") {
            result = total * 9.8;
        } else if (people == "Regular") {
            result = total * 20;
        } else if (people == "Business") {
            result = total * 15.6;
        }
    } else if (day == "Sunday"){
        if (people == "Students") {
            result = total * 10.46;
        } else if (people == "Regular") {
            result = total * 22.5;
        } else if (people == "Business") {
            result = total * 16;
        }
    }
    
    if (people == "Students" && total >= 30) {
        result = result * 0.85
    }

    if (people == "Business" && total >= 100) {
        part = 100 - (10 / result)
        result = result * part
    }

    if (people == "Regular" && total >= 10 && total <= 20) {
        result = result * 0.95
    }

    console.log(`Total price: ${result.toFixed(2)}`)
}