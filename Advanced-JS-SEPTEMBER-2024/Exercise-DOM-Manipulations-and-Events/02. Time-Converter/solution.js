function attachEventsListeners() {
    const inputElDays = document.querySelector('#days');
    const inputElhours = document.querySelector('#hours');
    const inputElMinutes = document.querySelector('#minutes');
    const inputElSeconds = document.querySelector('#seconds');

    const buttons = document.querySelectorAll('input[type="button"]');

    const units = {
        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1
    }

    function updateUnits(secondsAbount) {
        inputElDays.value = Number(secondsAbount / units.days).toFixed(2);
        inputElhours.value = Number(secondsAbount / units.hours).toFixed(2);
        inputElMinutes.value =Number(secondsAbount / units.minutes).toFixed(2);
        inputElSeconds.value = Number(secondsAbount / units.seconds).toFixed(2);
    }

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const inputTimeType = e.target.getAttribute('id').split('Btn')[0];
            const currentInputEl = document.querySelector('#' + inputTimeType);
            const currentValue = currentInputEl.value;
            
            const multiplier = units[inputTimeType];
            
            updateUnits(currentValue * multiplier);            
            
        });
    });
}