import { create } from "../api/fruits.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (addSubmitHandler) => html`
<!-- Create Page (Only for logged-in users) -->
      <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form class="create-form" @submit=${addSubmitHandler}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>

`;

export default function addView(ctx){
    ctx.render(template(addSubmitHandler));

    async function addSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const imageUrl = formData.get('imageUrl');
        const description = formData.get('description');
        const nutrition = formData.get('nutrition');
        
        if(!name || !imageUrl || !description || !nutrition){
            return alert('Please fill the fields');
        }

        const fruitData = {
            name,
            imageUrl,
            description,
            nutrition
        }

        try{
            await create(fruitData);
            ctx.page.redirect('/dashboard');
        }catch(err){
            alert(err.message);
        }
        
    }
}