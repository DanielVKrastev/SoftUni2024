import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = () => html`
        <!-- Home page -->
        <section id="home">
          <h1>
            Welcome to <span>Samurider</span> moto market, your premier destination for Japanese motorcycles.</h1>
          <img
            src="./images/motorcycle.png"
            alt="home"
          />

        </section>
`;

export default function homeView(ctx, next){
    ctx.render(template());
}