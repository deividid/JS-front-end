function colorize() {
    // TODO

    const data = document.querySelector('table tbody');
    const data2 = data.children;

    for (let i = 1; i < data2.length; i += 2) {
        data2[i].style.backgroundColor = 'teal';
    }
}