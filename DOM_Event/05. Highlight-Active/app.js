function focused() {
    console.log('TODO:...');

    const sections = document.querySelectorAll('input[type=text]');

    sections.forEach((el) => el.addEventListener('focus', (e) => {
        e.currentTarget.parentElement.classList.add('focused');
    }))

    sections.forEach((el) => el.addEventListener('blur', (e) => {
        e.currentTarget.parentElement.classList.remove('focused');
    }))

}