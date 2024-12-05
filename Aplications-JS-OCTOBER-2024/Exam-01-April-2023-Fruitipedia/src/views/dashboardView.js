import { getAll } from "../api/fruits.js";
import { html, render } from "../lib/lit-html.js";

const template = (fruits) => html`
<!-- Dashboard page -->
<h2>Fruits</h2>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
           ${fruits.map(fruit => html`
          <div class="fruit">
            <img src="${fruit.imageUrl}" alt="${fruit.name}" />
            <h3 class="title">${fruit.name}</h3>
            <p class="description">${fruit.description}</p>
            <a class="details-btn" href="/details/${fruit._id}">More Info</a>
          </div>
          `)}
          
        </section>
         <!-- Display an h2 if there are no posts -->
          ${fruits.length === 0 ? html`<h2>No fruit info yet.</h2>` : ''}
         
`;

export default async function dashboardView(ctx){
    const fruits = await getAll();

    ctx.render(template(fruits));
}