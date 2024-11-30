import { getAll } from "../api/motorcycle.js";
import { html, render } from "../lib/lit-html.js";

const template = (motorcycles) => html`
<!-- Dashboard page -->
<h2>Available Motorcycles</h2>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
           ${motorcycles.map(motorcycle => html`
          <div class="motorcycle">
            <img src="${motorcycle.imageUrl}" alt="${motorcycle.model}" />
            <h3 class="model">${motorcycle.model}</h3>
            <p class="year">Year: ${motorcycle.year}</p>
            <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
            <p class="contact">Contact Number: ${motorcycle.contact}</p>
            <a class="details-btn" href="/details/${motorcycle._id}">More Info</a>
          </div>
          `)}
          
        </section>
         <!-- Display an h2 if there are no posts -->
          ${motorcycles.length === 0 ? html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>` : ''}
         
`;

export default async function dashboardView(ctx){
    const motorcycles = await getAll();

    ctx.render(template(motorcycles));
}