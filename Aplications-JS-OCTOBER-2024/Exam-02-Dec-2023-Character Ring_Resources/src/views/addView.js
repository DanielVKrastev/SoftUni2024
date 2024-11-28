import { create } from "../api/characters.js";
import { html } from "../lib/lit-html.js";

const template = (addSubmitHandler) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Add Character</h2>
            <form class="create-form" @submit=${addSubmitHandler}>
              <input type="text" name="category" id="category" placeholder="Character Type" />
              <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
              <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" ></textarea>
              <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10" ></textarea>
              <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
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