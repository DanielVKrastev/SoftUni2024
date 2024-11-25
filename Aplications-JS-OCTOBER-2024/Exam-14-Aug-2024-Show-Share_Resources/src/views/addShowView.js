import { createShow, getAllShows } from "../api/shows.js";
import { html, render } from "../lib/lit-html.js";
import page from "../lib/page.js";

const addShowTemplate = () => html`
 <!-- Create Page (Only for logged-in users) -->
 <section id="create">
          <div class="form">
            <h2>Add Show</h2>
            <form class="create-form" @submit=${addShowFormHandler}>
                <input type="text" name="title" id="title" placeholder="TV Show title" />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
                <input type="text" name="genre" id="genre" placeholder="Genre"   />
                <input type="text" name="country" id="country" placeholder="Country" />
                <textarea id="details" name="details" placeholder="Details" rows="2" cols="10"></textarea>
                <button type="submit">Add Show</button>
            </form>
          </div>
        </section>
`;

export default async function addShowView() {
    render(addShowTemplate(addShowFormHandler));
}

async function addShowFormHandler(e){
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
        const createRequest = await createShow(showData);
        page.redirect('/dashboard');
    }catch(err){
        console.error(err.message);
    }
    
}