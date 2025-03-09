function validate() {
    console.log('TODO:...');
    const emailInput = document.getElementById('email');

    const emailRegex = /^[a-z]+[@][a-z]+[.][a-z]+$/;

    emailInput.addEventListener('change', (e) => {
        if(emailRegex.test(e.currentTarget.value) == false) {
            e.currentTarget.classList.add('error');
        } else{
            e.currentTarget.classList.remove('error');
        }
    })
}