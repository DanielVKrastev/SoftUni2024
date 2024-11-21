import { html, render, nothing } from "lit-html";
import { getUserData } from "../utils.js";

const rootNav = document.getElementById('titlebar');

const navTemplate = (accessToken, email) => html`
        <a href="/" class="site-logo">Team Manager</a>
        <nav>
            <a href="/teams" class="action">Browse Teams</a>
            ${
                accessToken && email 
                    ? html`
                    <a href="#" class="action">My Teams</a>
                    <a href="/logout" class="action">Logout</a>
                    `
                    : html `
                    <a href="/login" class="action">Login</a>
                    <a href="/register" class="action">Register</a>
                    `
            }
        </nav>
`;

export function navigationView(ctx, next){

    const userData = getUserData();

    if(userData){
        render(navTemplate(userData.accessToken, userData.email), rootNav);
    }else{
        render(navTemplate(), rootNav);
    }
    
    next();
}

