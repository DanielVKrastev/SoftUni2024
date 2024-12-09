import { html, render } from "../lib/lit-html.js";

const template = () => html`
    <!-- Home page -->
    <section id="hero">
        <p>
          Discover the best deals on drones! Buy, sell, and trade top-quality drones with ease on Drone Deals - your
          trusted marketplace for all things drone.</p>
    </section>
`;

export default function homeView(ctx, next){
    ctx.render(template());
    
}