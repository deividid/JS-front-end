function lockedProfile() {
    console.log('TODO...')

    const buttons = document.querySelectorAll('div.profile button')

    buttons.forEach( (b) => {
        const isLocked = b.parentElement.querySelectorAll('input');
        const hidenField = b.parentElement.querySelector('div');
        console.log(hidenField);

    })
    

    function buttonClick(event) {
        const button = event.target;
        const isLocked = button.parentElement.querySelectorAll('input');
        const hidenField = button.parentElement.querySelector('div');


        if (isLocked[0].checked == true) {
            return;

        }

        if (button.textContent === "Show more") {
            hidenField.style.display = 'block';
            button.textContent = 'Hide it';

        } else if (button.textContent === 'Hide it') {
            hidenField.style.display = 'none';
            button.textContent = 'Show more';
        }
               

    }

    buttons.forEach((button) => {
        button.addEventListener('click', buttonClick);
    })

}