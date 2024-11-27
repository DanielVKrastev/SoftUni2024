import { html, render } from "../lib/lit-html.js";

const template = () => html`
    <!-- Home page -->
    <section id="hero">
        <h1>
        Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
        </h1>
    </section>
`;

export default function homeView(ctx, next){
    ctx.render(template());
    
}