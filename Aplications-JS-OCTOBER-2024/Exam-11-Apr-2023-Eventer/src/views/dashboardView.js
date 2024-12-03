import { getAll } from "../api/events.js";
import { html, render } from "../lib/lit-html.js";

const template = (events) => html`
<!-- Dashboard page -->
<h2>Current Events</h2>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
           ${events.map(event => html`
          <div class="event">
            <img src="${event.imageUrl}" alt="${event.name}" />
            <p class="title">
              ${event.name}
            </p>
            <p class="date">${event.date}</p>
            <a class="details-btn" href="/details/${event._id}">Details</a>
          </div>
          `)}
          
        </section>
         <!-- Display an h2 if there are no posts -->
          ${events.length === 0 ? html`<h4>No Events yet.</h4>` : ''}
         
`;

export default async function dashboardView(ctx){
    const events = await getAll();

    ctx.render(template(events));
}