import { register } from "../api/user.js";
import { html, render } from "../lib/lit-html.js";
import { saveUserData } from "../utils/userUtils.js";
import page from '../lib/page.js';

const registerTemplate = (registerFormSubmit) => html`
       <!-- Register Page (Only for Guest users) -->
       <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${registerFormSubmit}>
              <input type="text" name="email" id="register-email" placeholder="email"   />
              <input type="password" name="password" id="register-password" placeholder="password"   />
              <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"   />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>

`;

export default function registerView() {
    render(registerTemplate(registerFormSubmit));
}

async function registerFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('re-password');

    if(!email || !password){
        return window.alert('Please fill the fields');
    }

    if(password != rePassword){
        return window.alert('The password and repeat password doesn\'t match');
    }

    try{
        const userData = await register(email, password);
        saveUserData(userData);
        page.redirect('/');
    }catch(err){
        window.alert(err.message);
    }

}