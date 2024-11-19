import { html, baseRender } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";
    
const headerElement = document.querySelector('#wrapper > header');

const template = (isAuthenticated) => html`
    <!-- Navigation -->
    <a id="logo" href="/"
        ><img id="logo" src="./images/logo.png" alt="img"
    /></a>
    <nav>
        <div>
            <a href="/dashboard">Market</a>
        </div>

        <!-- Logged-in users -->
         ${isAuthenticated
            ? html`
            <div class="user">
                <a href="/create">Sell</a>
                <a href="/logout">Logout</a>
            </div>
            ` :
            html `
            <!-- Guest users -->
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            `
         }
    </nav>
`;

export default async function navigationView(ctx) {
    const userData = getUserData();
    const isAuthenticated = !!userData.accessToken;

    baseRender(template(isAuthenticated), headerElement);
}