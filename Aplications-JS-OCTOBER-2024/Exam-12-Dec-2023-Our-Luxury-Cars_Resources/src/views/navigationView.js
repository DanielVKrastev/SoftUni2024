import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const rootNav = document.querySelector('#wrapper header');

const template = (accessToken, email) => html`
<!-- Navigation -->
<a id="logo" href="/"><img id="logo-car" src="./images/car-logo.png" alt="img"/></a>
        <nav>
          <div>
            <a href="/dashboard">Our Cars</a>
            <a href="/search">Search</a>
          </div>

          ${
            accessToken && email
            ? html`<!-- Logged-in users -->
            <div class="user">
                <a href="/addcar">Add Your Car</a>
                <a href="/logout">Logout</a>
            </div>
            `
            : html `  <!-- Guest users -->
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>`
          }

        </nav>
`;

export default function navigationView(ctx, next){

    const userData = getUserData();

    if(userData){
        render(template(userData.accessToken, userData.email), rootNav);
    }else{
        render(template(), rootNav);
    }

    next();
}