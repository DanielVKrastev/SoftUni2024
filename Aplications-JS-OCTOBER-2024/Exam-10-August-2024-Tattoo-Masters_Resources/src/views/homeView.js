import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = () => html`
 <!-- Home page -->

 <section id="home">
    <div id="home-wrapper">
    <p id="home-intro">
        Whether you're a seasoned artist, a collector of ink, or someone
        looking for inspiration for their first tattoo,
        <span>Tattoo Masters</span> is your community. Share your
        masterpieces, discover incredible designs, and connect with
        artists and aficionados from around the world.
    </p>
    <a href="/register" id='join-us'>Join Us!</a>
    </div>
</section>
`;

export default function homeView(ctx, next){
    ctx.render(template());
    
}