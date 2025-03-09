function solve(x, y, z) {
    function sum() {
        return x + y;
    }

    function subtract() {
        return sum() - z;
    }
    console.log(subtract())
}

