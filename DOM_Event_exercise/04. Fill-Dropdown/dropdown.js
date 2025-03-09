function addItem() {
    console.log('TODO:...');

    const menuOptions = document.getElementById('menu');
    const textInput = document.getElementById("newItemText");
    const valueInput = document.getElementById("newItemValue");

    const newOption = document.createElement('option');

    newOption.value = valueInput.value;
    newOption.textContent = textInput.value;

    menuOptions.appendChild(newOption);
    textInput.value = '';
    valueInput.value = '';

}