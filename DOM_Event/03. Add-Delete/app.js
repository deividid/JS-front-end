function addItem() {
    //TODO...
    const input = document.getElementById("newItemText");
    const listId = document.getElementById('items');

    const newEl = document.createElement('li');
    newEl.textContent = input.value;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';

    deleteButton.addEventListener('click', () => {
        newEl.remove();
    })

    newEl.append(deleteButton);
    console.log(newEl.children);

    listId.appendChild(newEl);
    input.value = '';
}