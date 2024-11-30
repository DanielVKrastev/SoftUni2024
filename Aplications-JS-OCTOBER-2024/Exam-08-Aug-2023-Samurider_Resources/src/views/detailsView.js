import { getOne } from "../api/motorcycle.js";
import { html, render } from "../lib/lit-html.js";

const template = (motorcycle, isOwner, accessToken) => html`
  <!-- Details page -->
  
  <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${motorcycle.imageUrl}" alt="${motorcycle.model}" />
            <p id="details-title">${motorcycle.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${motorcycle.year}</p>
                <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
                <p class="contact">Contact Number: ${motorcycle.contact}</p>
                   <p id = "motorcycle-description">${motorcycle.about}</p>
              </div>
               <!--Edit and Delete are only for creator-->
               ${
                (accessToken && isOwner) 
                ? html`
            <div id="action-buttons">
              <a href="/edit/${motorcycle._id}" id="edit-btn">Edit</a>
              <a href="/delete/${motorcycle._id}" id="delete-btn">Delete</a>
            </div>
                `
                : ''
               }

            </div>
        </div>
      </section>
`;

export default async function detailsView(ctx){
    const motoId = ctx.params.id;
    const motoData = await getOne(motoId);
    const accessToken = ctx.userData.accessToken;
    const userId = ctx.userData._id;

    let isOwner = false;
    if(userId === motoData._ownerId){
        isOwner = true;
    }

    ctx.render(template(motoData, isOwner, accessToken));

}