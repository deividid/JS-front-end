function passwordValidator(password) {
    let passRegex = /^[A-Za-z0-9]+$/;
    let passCheck = true;
    if (password.length > 10 || password.length < 6) {
        console.log("Password must be between 6 and 10 characters");
        passCheck = false;
    }

    if (passRegex.test(password) == false) {
        console.log("Password must consist only of letters and digits");
        passCheck = false;
    }

    let numberCount = 0;

    for (let i of password.split("")) {
        if (isNaN(i) == false) {
            numberCount ++;
        }
    }

    if (numberCount < 2) {
        console.log("Password must have at least 2 digits");
        passCheck = false;
    }

    if (passCheck == true) {
        console.log("Password is valid")
    }
}

passwordValidator('password12')