import { getAll } from "../api/drones.js";
import { html, render } from "../lib/lit-html.js";

const template = (drones) => html`
    <!-- Dashboard page -->
    <h3 class="heading">Marketplace</h3>
    <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
        ${drones.map(drone => html`
        <div class="drone">
            <img src="${drone.imageUrl}" alt="${drone.model}" />
            <h3 class="model">${drone.model}</h3>
            <div class="drone-info">
                <p class="price">Price: €${drone.price}</p>
                <p class="condition">Condition: ${drone.condition}</p>
                <p class="weight">Weight: ${drone.weight}g</p>
            </div>
            <a class="details-btn" href="/details/${drone._id}">Details</a>
        </div>
    `)}
    

    </section>
    <!-- Display an h2 if there are no posts -->
    ${drones.length === 0
    ? html`<h3 class="no-drones">No Drones Available</h3>`
    : ''
    }
      
`;

export default async function dashboardView(ctx){
    const drones = await getAll();
   //console.log(tattoos);
    
    ctx.render(template(drones));
}