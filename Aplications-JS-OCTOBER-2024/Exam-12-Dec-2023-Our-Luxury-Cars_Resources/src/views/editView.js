import { edit, getOne } from "../api/cars.js";
import { html, render } from "../lib/lit-html.js";

const template = (car, editSubmitHandler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form class="edit-form" @submit=${editSubmitHandler}>
              <input type="text" name="model" id="model" placeholder="Model" value=${car.model} />
              <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" value=${car.imageUrl} />
              <input type="text" name="price" id="price" placeholder="Price in Euro" value=${car.price} />
              <input type="number" name="weight" id="weight" placeholder="Weight in Kg" value=${car.weight} />
              <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" value=${car.speed} />
              <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50">${car.about}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export default async function editView(ctx){
    const carId = ctx.params.id;
    const carData = await getOne(carId)

    ctx.render(template(carData, editSubmitHandler));

    async function editSubmitHandler(e) {
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
            await edit(carId, carData);
            ctx.page.redirect(`/details/${carId}`);
        }catch(err){
            alert(err.message);
        }
        
    }
}