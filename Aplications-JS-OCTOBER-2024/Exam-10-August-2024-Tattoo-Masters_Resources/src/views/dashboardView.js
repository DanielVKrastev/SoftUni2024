import { getAllTattoos } from "../api/tattoos.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";
const template = (tattoos) => html`
 <!-- Dashboard page -->
 <h2>Collection</h2>
        <section id="tattoos">

        ${
            tattoos.map(tattoo => html`
            <div class="tattoo">
                <img src="${tattoo.imageUrl}" alt="${tattoo.type}" />
                <div class="tattoo-info">
                    <h3 class="type">${tattoo.type}</h3>
                    <span>Uploaded by </span>
                    <p class="user-type">${tattoo.userType}</p>
                    <a class="details-btn" href="/details/${tattoo._id}">Learn More</a>
                </div>
            </div>
                `)
        }

        ${tattoos.length === 0 ? html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>` : ''}
        </section>
`;

export default async function dashboardView(ctx){
    const tattoos = await getAllTattoos();
   //console.log(tattoos);
    
    ctx.render(template(tattoos));
}