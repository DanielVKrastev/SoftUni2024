import { create } from "../api/facts.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (addSubmitHandler) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
          <div class="form">
            <h2>Add Fact</h2>
            <form class="create-form" @submit=${addSubmitHandler}>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fact</button>
            </form>
          </div>
        </section>
`;

export default function addView(ctx){
    ctx.render(template(addSubmitHandler));

    async function addSubmitHandler(e) {
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
            await create(characterData);
            ctx.page.redirect('/dashboard');
        }catch(err){
            alert(err.message);
        }
        
    }
}