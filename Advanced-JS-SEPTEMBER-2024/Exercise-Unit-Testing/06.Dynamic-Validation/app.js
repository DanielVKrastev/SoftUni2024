function validate() {
    const emailEl = document.querySelector('#email');
    const pattern = /^.*@.*\..*$/g;

    emailEl.addEventListener('change', (e) => {
        e.target.className = (!pattern.test(e.target.value)) ? 'error' : '';
    });
}