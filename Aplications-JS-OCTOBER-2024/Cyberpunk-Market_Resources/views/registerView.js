import page from "../lib/page.js";
import { register } from "../api/usersApi.js";
import { html, render } from "../lib/lit-html.js";
import { saveUserData } from "../utils/userUtils.js";

const template = (onSubmit) => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${onSubmit}>
                <input type="text" name="email" id="register-email" placeholder="email"/>
                <input type="password" name="password" id="register-password" placeholder="password"/>
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"/>
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;

export default async function registerView(ctx) {
    render(template(registerFormSubmitHandler.bind(ctx)));
}

async function registerFormSubmitHandler(e) { 
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('re-password');

    // Validation
    if(email === '' || password === '' || rePassword === ''){
        return alert('Fields are required!');
    }

    if(password !== rePassword){
       //return alert(`Passwords don't match`);
       return this.showNotification(`Passwords don't match`);
    }

    // Error handling
    try{
        // Create request
        const userData = await register(email, password);
        // Save user data
        saveUserData(userData);
        // Redirect to home on success
        page.redirect('/');

    }catch(err){
        alert(err.message);
    }

}