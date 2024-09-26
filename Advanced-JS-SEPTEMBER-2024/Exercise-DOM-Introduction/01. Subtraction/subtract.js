function subtract() {
    const firstNumberEl = document.querySelector('#firstNumber');
    const seconndNumberEl = document.querySelector('#secondNumber');

    //const [first, second] = document.querySelectorAll("#wrapper input[type='text'")

    const resultEl = document.querySelector('#result');

    resultEl.textContent = Number(firstNumberEl.value) - Number(seconndNumberEl.value);
}