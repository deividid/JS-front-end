function solve(speed, area) {
    if (area == "motorway") {
        let excessSpeed = speed - 130;
        if (excessSpeed <= 0) {
            console.log(`Driving ${speed} km/h in a 130 zone`)
        } else if(excessSpeed <= 20) {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 130 - speeding`)
        } else if(excessSpeed <= 40) {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 130 - excessive speeding`)
        } else {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 130 - reckless driving`)
        }

    } else if (area == "interstate") {
        let excessSpeed = speed - 90;
        if (excessSpeed <= 0) {
            console.log(`Driving ${speed} km/h in a 90 zone`)
        } else if(excessSpeed <= 20) {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 90 - speeding`)
        } else if(excessSpeed <= 40) {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 90 - excessive speeding`)
        } else {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 90 - reckless driving`)
        }
    } else if (area == "city") {
        let excessSpeed = speed - 50;
        if (excessSpeed <= 0) {
            console.log(`Driving ${speed} km/h in a 50 zone`)
        } else if(excessSpeed <= 20) {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 50 - speeding`)
        } else if(excessSpeed <= 40) {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 50 - excessive speeding`)
        } else {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 50 - reckless driving`)
        }
    } else if (area == "residential") {
        let excessSpeed = speed - 20;
        if (excessSpeed <= 0) {
            console.log(`Driving ${speed} km/h in a 20 zone`)
        } else if(excessSpeed <= 20) {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 20 - speeding`)
        } else if(excessSpeed <= 40) {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 20 - excessive speeding`)
        } else {
            console.log(`The speed is ${excessSpeed} km/h faster than the allowed speed of 20 - reckless driving`)
        }
    }
}