function generateReport() {
    const textArea = document.getElementById('output');
    const columns = document.querySelectorAll('thead tr th');
    const info = document.querySelectorAll('tbody tr');

    const check = [...columns].map((x, i) => ({input: x.children[0], index: i})).filter((x) => x.input.checked);

    const result = [...info].map( (tr) => {
        return check.reduce((acc, curr) => {
            acc[curr.input.name] = tr.children[curr.index].textContent;
            return acc;
        },{});
    } );

    textArea.value = JSON.stringify(result);



}