import { login } from "../api/user.js";
import { html, render } from "../lib/lit-html.js";
import { saveUserData } from "../utils/userUtils.js";
import page from '../lib/page.js';

const loginTemplate = (loginFormSubmit) => html`
        <!-- Login Page (Only for Guest users) -->
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${loginFormSubmit}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input type="password" name="password" id="password" placeholder="password"/>
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export default function loginView() {
    render(loginTemplate(loginFormSubmit));
}

async function loginFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if(!email || !password){
        return window.alert('Please fill the fields');
    }

    try{
        const userData = await login(email, password);
        saveUserData(userData);
        page.redirect('/');
    }catch(err){
        window.alert(err.message);
    }

}