function loading(number) {
    let bars = number / 10;

    let result = "%".repeat(bars) + ".".repeat(10 - bars);

    if (bars == 10) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${number}% [${result}]`)
        console.log('Still loading...')
    }
}