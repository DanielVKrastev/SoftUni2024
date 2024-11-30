import { create } from "../api/motorcycle.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (addSubmitHandler) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
          <h2>Add Motorcycle</h2>
          <div class="form">
            <h2>Add Motorcycle</h2>
            <form class="create-form" @submit=${addSubmitHandler}>
            <input
                type="text"
                name="model"
                id="model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="moto-image"
                placeholder="Moto Image"
              />
              <input
              type="number"
              name="year"
              id="year"
              placeholder="Year"
            />
            <input
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
          />
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="contact"
          />
            <textarea
              id="about"
              name="about"
              placeholder="about"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Motorcycle</button>
            </form>
          </div>
        </section>
`;

export default function addView(ctx){
    ctx.render(template(addSubmitHandler));

    async function addSubmitHandler(e) {
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
            await create(motoData);
            ctx.page.redirect('/dashboard');
        }catch(err){
            alert(err.message);
        }
        
    }
}