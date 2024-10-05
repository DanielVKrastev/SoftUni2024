function validate() {
    const patterns = {
        username: /^[a-zA-Z0-9]{3,20}$/,
        email: /^.*@.*\..*$/,
        password: /^\w{5,15}$/,
        "confirm-password": /^\w{5,15}$/,
        companyNumber: /^\w{4,4}$/
    }
    
    const formEl = document.querySelector('#registerForm');
    const companyEl = document.querySelector('#company');
    const companyInfoEl = document.querySelector('#companyInfo');
    const validaEl = document.querySelector('#valid');

    companyEl.addEventListener('change', (e) => {
        companyInfoEl.style.display = (e.target.checked) ? 'block' : 'none';
    })

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const invaliedFiels = [];
        const inputFieldsForValidation = [...e.target.querySelectorAll('input:not([type="checkbox"])')];

        inputFieldsForValidation.forEach((fieldEl) => {
            const type = fieldEl.getAttribute('id');
            const passwordEl = e.target.querySelector('#password');

            if(type == 'companyNumber' && companyInfoEl.style.display == 'none'){
                return;
            }

            //console.log(type, patterns[type]);

            if(! patterns[type].test(fieldEl.value)){
                fieldEl.style.borderColor = 'red';
                invaliedFiels.push(fieldEl);
            }else{
                fieldEl.style.borderColor = '';
            }

            if(type == 'confirm-password' && fieldEl.value != passwordEl.value){
                invaliedFiels.push(fieldEl);
                invaliedFiels.push(passwordEl);
                fieldEl.style.borderColor = 'red';
                passwordEl.style.borderColor = 'red';
            }
            
            validaEl.style.display = (invaliedFiels.length == 0) ? 'block': 'none';
        });
        
    })

}
