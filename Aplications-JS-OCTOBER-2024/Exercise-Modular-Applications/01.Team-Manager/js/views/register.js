import { html, nothing } from "lit-html";
import { register } from "../data/users.js";

const registerTemplate = (onRegister, errorMessage) => html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form id="register-form" class="main-form pad-large" @submit=${onRegister}>
                ${
                    errorMessage ? html`<div class="error">${errorMessage}</div>` : nothing
                }
                <label>E-mail: <input type="text" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="#" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>
`;

export function registerView(ctx){
    updateView();

    function updateView(errorMessage) {
        ctx.render(registerTemplate(onRegister, errorMessage));
    }

    async function onRegister(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        if(! data.email){
            updateView('Email is required');
            return;
        }

        if(! data.password || ! data.repass){
            updateView('Password is required');
            return;
        }

        if(data.password !== data.repass){
            updateView('The passwords must be same');
            return;
        }

        if(data.password.length < 3 || data.repass.length < 3){
            updateView('The password must be least 3 characters/digits');
            return;
        }

        if(data.username.length < 3){
            updateView('The username must be least 3 characters');
            return;
        }

        try{
            await register(data.email, data.username, data.password);
            ctx.page.redirect('/');
        }catch(err){
            err.handled = true;
            updateView(err.message);
        }
        
    }
}