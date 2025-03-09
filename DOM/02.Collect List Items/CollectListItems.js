function extractText() {
    const data = document.getElementById('items');
    const getResult = document.getElementById('result');
    let makeArray = data.textContent.split('/n').map(row => row.trim()).join('/n');

    getResult.textContent = makeArray.trim();
    
}
