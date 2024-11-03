import homePage from "./home.js";
import { renderNavigation } from "./navigation.js";

const loginURL = 'http://localhost:3030/users/login';

const sectionElement = document.getElementById('login-view');
const loginForm = sectionElement.querySelector('form');
const notification = sectionElement.querySelector('.notification');

export default function loginPage(){
    sectionElement.style.display = 'inline-block';
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = event.target.querySelector("#login input[type='text']");
    const passwordInput = event.target.querySelector("#login input[type='password']");

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

   onSubmitLogin(dataObj);
});

async function onSubmitLogin(data){
  
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
        const response = await fetch(loginURL ,settings);
        const dataRes = await response.json();
        if (response.status == 200) {
            localStorage.setItem('accessToken', dataRes.accessToken);
            localStorage.setItem('email', dataRes.email);
            localStorage.setItem('_id', dataRes._id);

            //sectionElement.style.display = 'none';
            //homePage();
            //renderNavigation();
            location.reload();

        } else if(response.status >= 400){
            notification.textContent = dataRes.message;
        } else {
            throw new Error(dataRes.message);
        }
        return;
    } catch (err) {
        notification.textContent = err.message;
        return;
    }
    
}

