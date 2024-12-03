import { create } from "../api/events.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (addSubmitHandler) => html`
<!-- Create Page (Only for logged-in users) -->
      <section id="create">
          <div class="form">
            <h2>Add Event</h2>
            <form class="create-form" @submit=${addSubmitHandler}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
            />

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
        const name = formData.get('name');
        const imageUrl = formData.get('imageUrl');
        const category = formData.get('category');
        const description = formData.get('description');
        const date = formData.get('date');
        
        if(!name || !imageUrl || !category || !description || !date){
            return alert('Please fill the fields');
        }

        const eventData = {
            name,
            imageUrl,
            category,
            description,
            date
        }

        try{
            await create(eventData);
            ctx.page.redirect('/dashboard');
        }catch(err){
            alert(err.message);
        }
        
    }
}