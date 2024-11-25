import { editShow, getOneShow } from "../api/shows.js";
import { html, render } from "../lib/lit-html.js";
import page from "../lib/page.js";

const editShowTemplate = (showData, editShowSubmit) => html`
         <!-- Edit Page (Only for logged-in users) -->
         <section id="edit">
          <div class="form">
            <h2>Edit Show</h2>
            <form class="edit-form" @submit=${editShowSubmit}>
              <input type="text" name="title" id="title" placeholder="TV Show title" value=${showData.title} />
              <input type="text" name="image-url" id="image-url" placeholder="Image URL" value=${showData.imageUrl}  />
              <input type="text" name="genre" id="genre" placeholder="Genre" value=${showData.genre} />
                <input type="text" name="country" id="country" placeholder="Country" value=${showData.country}/>
              <textarea id="details" name="details" placeholder="Details" rows="2" cols="10">${showData.details}</textarea>
              <button type="submit">Edit Show</button>
            </form>
          </div>
        </section>

`;

export default async function editShowView(ctx) {

    const showId = ctx.params.id;
    const showData = await getOneShow(showId);

    render(editShowTemplate(showData, editShowSubmit));

    async function editShowSubmit(e){
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title');
        const imageUrl = formData.get('image-url');
        const genre = formData.get('genre');
        const country = formData.get('country');
        const details = formData.get('details');
    
        if(!title || !imageUrl || !genre || !country || !details){
            return window.alert('Please fill the fields');
        }
    
        const showData = {
            title,
            imageUrl,
            genre,
            country,
            details
        }
    
        try{
            const createRequest = await editShow(showId, showData);
            page.redirect(`/details/${showId}`);
        }catch(err){
            console.error(err.message);
        }
        
    }
}