function addItem() {
    console.log('TODO:...');

    const itemsList = document.getElementById('items');
    const input = document.getElementById("newItemText");

    const newElement = document.createElement('li');

    newElement.textContent = input.value;
    itemsList.appendChild(newElement);
    input.value = "";
    
}