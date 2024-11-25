import { baseRender, html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const navigationTemplate = (accessToken) => html`
    <div>
        <a href="/dashboard">TV Shows</a>
        <a href="/search">Search</a>
    </div>

    ${
        accessToken
        ? html`<!-- Logged-in users -->
        <div class="user">
            <a href="/addshow">Add Show</a>
            <a href="/logout">Logout</a>
        </div>
        `
        : html `<!-- Guest users -->
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        `
    }
`;

const navElement = document.querySelector('#wrapper header nav');

export default function navigationView(ctx){
    const { accessToken, email, userId } = getUserData();

    baseRender(navigationTemplate(accessToken), navElement);

}

