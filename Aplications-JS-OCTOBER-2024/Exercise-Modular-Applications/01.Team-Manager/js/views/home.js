import { html } from "lit-html";

const homeTemplate = (hasUser) =>html`
    <section id="home">
        <article class="hero layout">
            <img src="./assets/team.png" class="left-col pad-med">
            <div class="pad-med tm-hero-col">
                <h2>Welcome to Team Manager!</h2>
                <p>Want to organize your peers? Create and manage a team for free.</p>
                <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                ${hasUser
                        ? html`<a href="/teams" class="action cta">Browse Teams</a>`
                        : html`<a href="/login" class="action cta">Sign Up Now</a>`
                }
                
            </div>
        </article>
    </section>
`;

export function homeView(ctx){
    const userData = ctx.userData;
    //localstorage is empty: userData = false
    ctx.render(homeTemplate(userData));
}