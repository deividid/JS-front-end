function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const text = document.getElementById('extra');
    let buttonText = button.textContent;

    console.log(buttonText);
    console.log(buttonText == "More");

    if (buttonText == "More") {
        text.style.display = 'block';
        button.textContent = "Less";

    } else if(buttonText == "Less") {
        text.style.display = 'none';
        button.textContent = "More";
    }
}