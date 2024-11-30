import { edit, getOne } from "../api/motorcycle.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (motorcycle, editSubmitHandler) => html`
 <!-- Edit Page (Only for logged-in users) -->
 <section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
            <form class="edit-form" @submit=${editSubmitHandler}>
            <input
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  value=${motorcycle.model}
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="moto-image"
                  placeholder="Moto Image"
                  value=${motorcycle.imageUrl}
                />
                <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                value=${motorcycle.year}
              />
              <input
              type="number"
              name="mileage"
              id="mileage"
              placeholder="mileage"
              value=${motorcycle.mileage}
            />
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="contact"
              value=${motorcycle.contact}
            />
              <textarea
                id="about"
                name="about"
                placeholder="about"
                rows="10"
                cols="50"
              >${motorcycle.about}</textarea>
                <button type="submit">Edit Motorcycle</button>
              </form>
          </div>
        </section>
`;

export default async function editView(ctx){
    const motoId = ctx.params.id;
    const data = await getOne(motoId)

    ctx.render(template(data, editSubmitHandler));

    async function editSubmitHandler(e) {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const model = formData.get('model');
      const imageUrl = formData.get('imageUrl');
      const year = formData.get('year');
      const mileage = formData.get('mileage');
      const contact = formData.get('contact');
      const about = formData.get('about');
      
      if(!model || !imageUrl || !year || !mileage || !contact || !about){
          return alert('Please fill the fields');
      }

      const motoData = {
          model,
          imageUrl,
          year,
          mileage,
          contact,
          about
      }

        try{
            await edit(motoId, motoData);
            ctx.page.redirect(`/details/${motoId}`);
        }catch(err){
            alert(err.message);
        }
    }
}