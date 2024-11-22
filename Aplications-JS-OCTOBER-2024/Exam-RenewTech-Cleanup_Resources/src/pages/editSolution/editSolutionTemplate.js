import { html } from "../../../node_modules/lit-html/lit-html.js";

export const editSolutionTemplate = (solution, editSolutionHandler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Edit Solution</h2>
            <form class="edit-form" @submit=${editSolutionHandler}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
                value=${solution.type}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                value=${solution.imageUrl}
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
              >${solution.description}</textarea>
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
              >${solution.learnMore}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;
