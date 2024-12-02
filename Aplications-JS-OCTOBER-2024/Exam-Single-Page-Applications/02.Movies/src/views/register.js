import homePage from "./home.js";
import { renderNavigation } from "./navigation.js";

const sectionElement = document.getElementById('form-sign-up');

export default function registerPage(){
    sectionElement.style.display = 'block';
}

const registerURL = 'http://localhost:3030/users/register';
const registerForm = sectionElement.querySelector('#register-form');

// create notification paragraph with div
const divNotification = document.createElement('div');
divNotification.innerHTML = '<p id="notification" style="color: red"></p>';
registerForm.appendChild(divNotification);
const parNotification = registerForm.querySelector('#notification');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get all values from register form
    const formData = new FormData(event.target);
    const dataObj = {};
    [...formData.entries()].forEach((data) => {
       dataObj[data[0]] = data[1];
    })
    
    onSubmitRegistration(dataObj);
})

async function onSubmitRegistration(data){

        // Check if the values is empty
    parNotification.textContent = '';

    try{

        if(data.email === '' || data.password === '' || data.repeatPassword === ''){
            throw new Error('The inputs must be filleds.');
        }

        if(data.password !== data.repeatPassword){
            throw new Error('The repeat password should be equal to the password.');
        }

        if(data.password.length < 6){
            throw new Error('The password should be at least 6 characters long.');
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

        const response = await fetch(registerURL, settings);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const dataRes = await response.json();

        if(response.status >= 200){
            localStorage.setItem('accessToken', dataRes.accessToken);
            localStorage.setItem('email', dataRes.email);
            localStorage.setItem('_id', dataRes._id);
        }

        //reload page
        sectionElement.style.display = 'none';
        renderNavigation();
        homePage();

    }catch (e){
        parNotification.textContent = e.message;
        registerForm.reset();
    }
}
