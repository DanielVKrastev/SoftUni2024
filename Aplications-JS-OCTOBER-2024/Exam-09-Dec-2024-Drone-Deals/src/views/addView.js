import { create } from "../api/drones.js";
import { html, render } from "../lib/lit-html.js";

const template = (addSubmitHandler) => html`
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
          <div class="form form-item">
            <h2>Add Drone Offer</h2>
              <form class="create-form" @submit=${addSubmitHandler}>
                <input type="text" name="model" id="model" placeholder="Drone Model" />
                <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
                <input type="number" name="price" id="price" placeholder="Price" />
                <input type="number" name="weight" id="weight" placeholder="Weight" />
                <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
                <input type="text" name="condition" id="condition" placeholder="Condition" />
                <textarea name="description" id="description" placeholder="Description"></textarea>
                <button type="submit">Add</button>
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
        const price = formData.get('price');
        const weight = formData.get('weight');
        const phone = formData.get('phone');
        const condition = formData.get('condition');
        const description = formData.get('description');

        if(!model || !price || !weight || !phone || !condition || !imageUrl || !description){
            return ctx.showNotification('All fields are required');
        }

        const droneData = {
            model,
            imageUrl,
            price,
            weight,
            phone,
            condition,
            description
        }

        try{
            await create(droneData);
            ctx.page.redirect('/dashboard');
        }catch(err){
            alert(err.message);
        }
        
    }
}