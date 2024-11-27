import { getOne } from "../api/cars.js";
import { html, render } from "../lib/lit-html.js";

const template = (car, isOwner, accessToken) => html`
<!-- Details page -->

<section id="details">
    <div id="details-wrapper">
    <img id="details-img" src="${car.imageUrl}" alt="${car.model}" />
    <p id="details-title">${car.model}</p>
    <div id="info-wrapper">
        <div id="details-description">
        <p class="price">Price: €${car.price}</p>
        <p class="weight">Weight: ${car.weight} kg</p>
        <p class="top-speed">Top Speed: ${car.speed} kph</p>
        <p id="car-description">
            ${car.about}
        </p>
        </div>

        ${
            (accessToken && isOwner) 
            ? html`
            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
                <a href="/edit/${car._id}" id="edit-btn">Edit</a>
                <a href="/delete/${car._id}" id="delete-btn">Delete</a>
            </div>`
            : ''
        }

    </div>
    </div>
</section>
`;

export default async function detailsView(ctx){
    const carId = ctx.params.id;
    const carData = await getOne(carId);
    const accessToken = ctx.userData.accessToken;
    const userId = ctx.userData._id;

    let isOwner = false;
    if(userId === carData._ownerId){
        isOwner = true;
    }

    ctx.render(template(carData, isOwner, accessToken));

}