import { getOne } from "../api/fruits.js";
import { html, render } from "../lib/lit-html.js";

const template = (fruit, isOwner, accessToken) => html`

        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${fruit.imageUrl}" alt="${fruit.name}" />
            <p id="details-title">${fruit.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="desc">
                  ${fruit.description}
                </p>
                <p id="nutrition">Nutrition</p>
                <p id = "details-nutrition">
                    ${fruit.nutrition}
                </p>
              </div>
            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
              ${isOwner && accessToken
                        ? html`
              <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
              <a href="/delete/${fruit._id}" id="delete-btn">Delete</a>
              `
              : ''
              }
            </div>
        </div>
      </section>
`;

export default async function detailsView(ctx){
  const fruitId = ctx.params.id;
  const fruitData = await getOne(fruitId);
  const accessToken = ctx.userData.accessToken;
  const userId = ctx.userData._id;

  let isOwner = false;
  if(userId === fruitData._ownerId){
      isOwner = true;
  }

  ctx.render(template(fruitData, isOwner, accessToken));

}