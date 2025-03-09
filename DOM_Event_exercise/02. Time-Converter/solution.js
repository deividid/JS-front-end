function attachEventsListeners() {

    console.log('TODO:...');

    const daysValue = document.getElementById('days');
    const hoursValue = document.getElementById('hours');
    const minutesValue = document.getElementById('minutes');
    const secondsValue = document.getElementById('seconds');
    const daysButton = document.getElementById('daysBtn');
    const hoursButton = document.getElementById('hoursBtn');
    const minutesButton = document.getElementById('minutesBtn');
    const secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', (e) => {
        const valueNumber = Number(daysValue.value);
        hoursValue.value = valueNumber * 24;
        minutesValue.value = valueNumber * 24 * 60;
        secondsValue.value = valueNumber * 24 * 60 * 60;
    })

    hoursButton.addEventListener('click', (e) => {
        const valueNumber = Number(hoursValue.value);
        daysValue.value = valueNumber / 24;
        minutesValue.value = valueNumber * 60;
        secondsValue.value = valueNumber * 60 * 60;
    })

    minutesButton.addEventListener('click', (e) => {
        const valueNumber = Number(minutesValue.value);
        hoursValue.value = valueNumber / 60;
        daysValue.value = valueNumber / 24 / 60;
        secondsValue.value = valueNumber * 60;
    })

    secondsButton.addEventListener('click', (e) => {
        const valueNumber = Number(secondsValue.value);
        hoursValue.value = valueNumber / 60 / 60;
        minutesValue.value = valueNumber / 60;
        daysValue.value = valueNumber / 24 / 60 / 60;
    })



}