import { edit, getOne } from "../api/fruits.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (fruit, editSubmitHandler) => html`
 <!-- Edit Page (Only for logged-in users) -->
 <section id="edit">
 <section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form class="edit-form" @submit=${editSubmitHandler}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                value=${fruit.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
                value=${fruit.imageUrl}
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            >${fruit.description}</textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            >${fruit.nutrition}</textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>
`;

export default async function editView(ctx){
    const fruitId = ctx.params.id;
    const data = await getOne(fruitId)

    ctx.render(template(data, editSubmitHandler));

    async function editSubmitHandler(e) {
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
            await edit(fruitId, fruitData);
            ctx.page.redirect(`/details/${fruitId}`);
        }catch(err){
            alert(err.message);
        }
    }
}