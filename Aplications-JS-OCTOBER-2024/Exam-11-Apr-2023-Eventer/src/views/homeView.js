import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = () => html`
        <section id="home">
          <div class="home-intro">
            <h1 class="fancy">Welcome to our community-driven events website! We believe that the best events
              come from the community.</h1>
               
               <p>So why wait? Join our community today and start 
                 discovering and sharing the best events in your area!</p>
                 <a class="event-btn" href="/dashboard">To Events</a>       
          </div>
          <img class="party-img" src="./images/party people.png" alt="event">
        </section>
`;

export default function homeView(ctx, next){
    ctx.render(template());
}