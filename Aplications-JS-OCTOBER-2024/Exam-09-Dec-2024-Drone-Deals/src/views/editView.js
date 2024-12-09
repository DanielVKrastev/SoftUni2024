import { edit, getOne } from "../api/drones.js";
import { html, render } from "../lib/lit-html.js";

const template = (drone, editSubmitHandler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
<div class="form form-item">
    <h2>Edit Offer</h2>
    <form class="edit-form" @submit=${editSubmitHandler}>
        <input type="text" name="model" id="model" placeholder="Drone Model" value=${drone.model} />
        <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" value=${drone.imageUrl} />
        <input type="number" name="price" id="price" placeholder="Price" value=${drone.price} />
        <input type="number" name="weight" id="weight" placeholder="Weight" value=${drone.weight} />
        <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" value=${drone.phone} />
        <input type="text" name="condition" id="condition" placeholder="Condition" value=${drone.condition} />
        <textarea name="description" id="description" placeholder="Description"> ${drone.description} </textarea>
        <button type="submit">Edit</button>
    </form>
    </div>
</section>
`;

export default async function editView(ctx){
    const droneId = ctx.params.id;
    const data = await getOne(droneId)

    ctx.render(template(data, editSubmitHandler));

    async function editSubmitHandler(e) {
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
            await edit(droneId, droneData);
            ctx.page.redirect(`/details/${droneId}`);
        }catch(err){
            alert(err.message);
        }
        
    }
}