function attachGradientEvents() {
    console.log('TODO:...');

    const result = document.getElementById('result');
    const boxShade = document.getElementById('gradient');

    boxShade.addEventListener('mousemove', (e) => {
        const position = e.offsetX;
        
        const width = e.currentTarget.clientWidth;
        let procent = Math.floor(position / width * 100);

        result.textContent = `${procent}%`;
    })
}