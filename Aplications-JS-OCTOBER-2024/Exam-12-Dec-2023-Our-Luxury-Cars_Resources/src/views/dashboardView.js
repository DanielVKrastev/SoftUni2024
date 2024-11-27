import { getAll } from "../api/cars.js";
import { html, render } from "../lib/lit-html.js";

const template = (cars) => html`
<!-- Dashboard page -->
<h3 class="heading">Our Cars</h3>
<section id="dashboard">
    ${cars.map(car => html`

    <!-- Display a div with information about every post (if any)-->
    <div class="car">
    <img src="${car.imageUrl}" alt="${car.model}" />
    <h3 class="model">${car.model}</h3>
    <div class="specs">
        <p class="price">Price: €${car.price}</p>
        <p class="weight">Weight: ${car.weight} kg</p>
        <p class="top-speed">Top Speed: ${car.speed} kph</p>
    </div>
    <a class="details-btn" href="/details/${car._id}">More Info</a>
    </div>

    `)}

    ${cars.length === 0
        ? html`<!-- Display an h2 if there are no posts -->
        <h3 class="nothing">Nothing to see yet</h3>`
        : ''
    }
     </section>
`;

export default async function dashboardView(ctx){
    const cars = await getAll();
   //console.log(tattoos);
    
    ctx.render(template(cars));
}