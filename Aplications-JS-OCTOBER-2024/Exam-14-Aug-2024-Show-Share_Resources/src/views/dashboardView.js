import { getAllShows } from "../api/shows.js";
import { html, render } from "../lib/lit-html.js";

const dashboardTemplate = (showsData) => html`
<!-- Dashboard page -->
<h2>Users Recommendations</h2>
        <section id="shows">

        ${
            showsData.map(show => html`
            <!-- Display a div with information about every post (if any)-->
          <div class="show">
            <img src="${show.imageUrl}" alt="${show.title}" />
            <div class="show-info">
              <h3 class="title">${show.title}</h3>
              <p class="genre">${show.genre}</p>
              <p class="country-of-origin">${show.country}</p>
              <a class="details-btn" href="/details/${show._id}">Details</a>
            </div>
          </div>
          </div>
            `)
        }
        </section>
        
        <!-- Display an h2 if there are no posts -->
        ${showsData.length === 0 
            ? html`<h2 id="no-show">No shows Added.</h2>` : ''
        }
        
`;

export default async function dashboardView() {

    const showsData = await getAllShows();

    render(dashboardTemplate(showsData));
}