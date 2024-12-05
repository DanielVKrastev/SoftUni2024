import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = () => html`
        <!-- Home page -->
        <section id="home">
          <h1>Learn more about your favorite fruits</h1>
          <img
            src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
            alt="home"
          />

        </section>
`;

export default function homeView(ctx, next){
    ctx.render(template());
}