import { getOne } from "../api/drones.js";
import { html, render } from "../lib/lit-html.js";

const template = (drone, isOwner, accessToken) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <div>
        <img id="details-img" src="${drone.imageUrl}" alt="${drone.model}" />
        <p id="details-model">${drone.model}</p>
        </div>
        <div id="info-wrapper">
        <div id="details-description">
            <p class="details-price">Price: €${drone.price}</p>
            <p class="details-condition">Condition: ${drone.condition}</p>
            <p class="details-weight">Weight: ${drone.weight}g</p>
            <p class="drone-description">
                ${drone.description}
            </p>
            <p class="phone-number">Phone: ${drone.phone}</p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${
            (accessToken && isOwner)
            ? html`
            <div class="buttons">
                <a href="/edit/${drone._id}" id="edit-btn">Edit</a>
                <a href="/delete/${drone._id}" id="delete-btn">Delete</a>
            </div>
            `
            : ''
        }
        
        </div>
    </div>
</section>
`;

export default async function detailsView(ctx){
    const droneId = ctx.params.id;
    const droneData = await getOne(droneId);
    const accessToken = ctx.userData.accessToken;
    const userId = ctx.userData._id;

    let isOwner = false;
    if(userId === droneData._ownerId){
        isOwner = true;
    }

    ctx.render(template(droneData, isOwner, accessToken));

}