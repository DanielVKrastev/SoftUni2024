import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = () => html`
        <!-- Home page -->
        <section id="home">
          <h1>Welcome to our website, where curiosity meets enjoyment!
             Discover fascinating fun facts that engage and entertain everyone,
              inviting you to participate in the joy of learning something new together.</h1>
              <img id="logo-img" src="./images/logo.png" alt=""/>
        </section>
`;

export default function homeView(ctx, next){
    ctx.render(template());
}