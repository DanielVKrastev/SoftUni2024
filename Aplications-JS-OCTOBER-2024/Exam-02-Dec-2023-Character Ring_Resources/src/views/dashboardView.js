import { getAll } from "../api/characters.js";
import { html } from "../lib/lit-html.js";

const template = (characters) => html`
<!-- Dashboard page -->
<h2>Characters</h2>
        <section id="characters">
          <!-- Display a div with information about every post (if any)-->
        ${
        characters.map(character => html`
            <div class="character">
                <img src="${character.imageUrl}" alt="${character.category}" />
                <div class="hero-info">
                <h3 class="category">${character.category}</h3>
                <p class="description">${character.description}</p>
                <a class="details-btn" href="/details/${character._id}">More Info</a>
                </div>
            </div>
        `)}
        </section>

        ${characters.length === 0
            ? html`<h2>No added Heroes yet.</h2>` : ''
        }
         
`;

export default async function dashboardView(ctx){
    const characters = await getAll();
   //console.log(tattoos);
    
    ctx.render(template(characters));
}