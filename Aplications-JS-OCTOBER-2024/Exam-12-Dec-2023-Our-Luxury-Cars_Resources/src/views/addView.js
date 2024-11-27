import { create } from "../api/cars.js";
import { html, render } from "../lib/lit-html.js";

const template = (addSubmitHandler) => html`
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
          <div class="form form-auto">
            <h2>Share Your Car</h2>
            <form class="create-form" @submit=${addSubmitHandler}>
              <input type="text" name="model" id="model" placeholder="Model" />
              <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" />
              <input type="text" name="price" id="price" placeholder="Price in Euro" />
              <input type="number" name="weight" id="weight" placeholder="Weight in Kg" />
              <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" />
              <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50" ></textarea>
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
        const speed = formData.get('speed');
        const about = formData.get('about');

        if(!model || !price || !weight || !speed || !about || !imageUrl){
            return alert('Please fill the fields');
        }

        const carData = {
            model,
            imageUrl,
            price,
            weight,
            speed,
            about
        }

        try{
            await create(carData);
            ctx.page.redirect('/dashboard');
        }catch(err){
            alert(err.message);
        }
        
    }
}