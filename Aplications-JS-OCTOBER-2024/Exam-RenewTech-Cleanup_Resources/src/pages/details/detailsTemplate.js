import { html } from "../../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (solution, isCreator, deleteHandler, likesCount, isLoggedIn, hasLiked, likesHandler) => html`
<!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <img
      id="details-img"
      src="${solution.imageUrl}"
      alt="${solution.type}"
    />
    <div>
      <p id="details-type">${solution.type}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">
            ${solution.description}
          </p>
          <p id="more-info">
            ${solution.learnMore}
          </p>
        </div>
      </div>
      <h3>Like Solution:<span id="like">${likesCount}</span></h3>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
            ${isCreator === true
                ? html`
                    <a href="/edit/${solution._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" id="delete-btn" @click=${() => deleteHandler(solution._id)}>Delete</a>`
                : ''
            }

            ${(isCreator === false && isLoggedIn === true && hasLiked === false)
              ? html `<a href="#" id="like-btn" @click=${() => likesHandler(solution._id)}>Like</a> -->`
              : ''
            }
      </div>
    </div>
  </div>
</section>
`;
