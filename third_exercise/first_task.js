function smallest(x, y, z) {
    let minNumber = x;
    if (minNumber > y) {
        minNumber = y;
    }
    if (minNumber > z) {
        minNumber = z;
    }
    console.log(minNumber)
}