import { getAll } from "../api/facts.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";
const template = (facts) => html`
 <!-- Dashboard page -->
 <h2>Fun Facts</h2>
        <section id="dashboard">
          ${facts.map(fact => html`
            <div class="fact">
                <img src="${fact.imageUrl}" alt="${fact.category}" />
                <h3 class="category">${fact.category}</h3>
                <p class="description">${fact.description}</p>
                <a class="details-btn" href="details/${fact._id}">More Info</a>
            </div>
                `)}

        </section>
         ${facts.length === 0 ? html`<h2>No Fun Facts yet.</h2>` : ''}
         
`;

export default async function dashboardView(ctx){
    const facts = await getAll();

    ctx.render(template(facts));
}