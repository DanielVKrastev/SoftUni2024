import { edit, getOne } from "../api/events.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (event, editSubmitHandler) => html`
 <!-- Edit Page (Only for logged-in users) -->
 <section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
            <form class="edit-form" @submit=${editSubmitHandler}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
                value=${event.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
                value=${event.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                value=${event.category}
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >
              ${event.description}</textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
              value=${event.date}
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export default async function editView(ctx){
    const eventId = ctx.params.id;
    const data = await getOne(eventId)

    ctx.render(template(data, editSubmitHandler));

    async function editSubmitHandler(e) {
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
            await edit(eventId, eventData);
            ctx.page.redirect(`/details/${eventId}`);
        }catch(err){
            alert(err.message);
        }
    }
}