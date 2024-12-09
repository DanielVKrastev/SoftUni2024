import { register } from "../api/user.js";
import { html, render } from "../lib/lit-html.js";
import { saveUserData } from "../utils/userUtils.js";

const template = (registerFormHandler) => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
        <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${registerFormHandler}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>
`;

export default function registerView(ctx, next){
    ctx.render(template(registerFormHandler));

    async function registerFormHandler(e) {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('re-password')
    
        if(!email || !password){
            return ctx.showNotification('All fields are required');
        }

        if(password !== rePassword){
            return ctx.showNotification(`Passwords don't match`);
        }
    
        try{
            const userData = await register(email, password);
            
            saveUserData(userData);
            ctx.page.redirect('/');
        }catch(err){
            return ctx.showNotification(err.message);
        }
    }
}