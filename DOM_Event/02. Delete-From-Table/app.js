function deleteByEmail() {
    console.log('TODO:...');
    const cutomerData = document.querySelectorAll('#customers tbody tr');
    const search = document.querySelector('label input');
    const getResult = document.getElementById('result');

    

    for (let d of cutomerData) {
        const searchResults = Array.from(d.children).find(el => el.textContent === search.value);

        if (searchResults) {
            console.log('Ok')
            d.remove();
            getResult.textContent = 'Deleted';

        } else {
            getResult.textContent = 'Not found';
        }

    }
}