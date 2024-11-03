import homePage from "./home.js";
import { renderNavigation } from "./navigation.js";

const registerURL = 'http://localhost:3030/users/register';

const sectionElement = document.getElementById('register-view');

const registerForm = sectionElement.querySelector('form');
const notification = sectionElement.querySelector('.notification');

export default function registerPage(){
    sectionElement.style.display = 'inline-block';
}

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = event.target.querySelector("#register input[type='text']");
    const passwordInput = event.target.querySelector("#register input[type='password']");

    const email = emailInput.value;
    const password = passwordInput.value;

   if(email === '' || password === ''){
        notification.textContent = 'Please fill in the fields';
        return;
   }

    const formData = new FormData(event.target);
    const dataObj = {};
    [...formData.entries()].forEach((data) => {
       dataObj[data[0]] = data[1];
    })
    
    OnSubmitRegistration(dataObj);
    
});

async function OnSubmitRegistration(data) {
    if(data.password != data.rePass){
        notification.textContent = 'Passwords don\'t match';
        return;
    }

    const body = JSON.stringify({
        email: data.email,
        password: data.password,
    });

    const settings = {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: body,
    };

    try {
        const response = await fetch(registerURL ,settings);
        const dataRes = await response.json();
        if (response.status == 200) {
            localStorage.setItem('accessToken', dataRes.accessToken);
            localStorage.setItem('email', dataRes.email);

            //sectionElement.style.display = 'none';
            //homePage();
            //renderNavigation();
            location.reload();
        } else {
            throw new Error(dataRes.message);
        }
    } catch (err) {
        notification.textContent = err.message;
        return;
    }
}