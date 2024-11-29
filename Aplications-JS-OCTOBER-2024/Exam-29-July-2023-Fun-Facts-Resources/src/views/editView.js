import { edit, getOne } from "../api/facts.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (fact, editSubmitHandler) => html`
 <!-- Edit Page (Only for logged-in users) -->
 <section id="edit">
          <div class="form">
            <h2>Edit Fact</h2>
            <form class="edit-form" @submit=${editSubmitHandler}>
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              value=${fact.category}
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
              value=${fact.imageUrl}
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
          >${fact.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
          >${fact.moreInfo}</textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        </section>
`;

export default async function editView(ctx){
    const factId = ctx.params.id;
    const data = await getOne(factId)

    ctx.render(template(data, editSubmitHandler));

    async function editSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const category = formData.get('category');
        const imageUrl = formData.get('image-url');
        const description = formData.get('description');
        const moreInfo = formData.get('additional-info');

        if(!category || !imageUrl || !description || !moreInfo){
            return alert('Please fill the fields');
        }

        const characterData = {
            category,
            imageUrl,
            description,
            moreInfo
        }

        try{
            await edit(factId, characterData);
            ctx.page.redirect(`/details/${factId}`);
        }catch(err){
            alert(err.message);
        }
    }
}