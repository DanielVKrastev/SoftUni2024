import { getAllShows, searchShow } from "../api/shows.js";
import { html, render } from "../lib/lit-html.js";
import page from "../lib/page.js";

const seachTemplate = (searchShowHandler, clickSearch, showData) => html`
    <!--BONUS Search page -->
    <section id="search">

    <div class="form">
        <h2>Search</h2>
        <form class="search-form" @submit=${searchShowHandler}>
            <input type="text" name="search" id="search-input" />
            <button class="button-list">Search</button>
        </form>
        </div>
        <h4>Results:</h4>
        <div class="search-result">
        ${
            clickSearch 
            ? clickSearchTemplate(showData)
            : ''
        }
        </div>
    </div>
    </section>
        
`;

const clickSearchTemplate = (showData) => html`
    ${showData.map(show => html`
        <div class="show">
            <img src="${show.imageUrl}" alt="${show.title}" />
            <div class="show">
            <h3 class="title">${show.title}</h3>
            <p class="genre">Genre: ${show.genre}</p>
            <p class="country-of-origin">Country of Origin: ${show.country}</p>
            <a class="details-btn" href="/details/${show._id}">Details</a>
        </div>
    `)}
    ${showData.length === 0
        ? html`<p class="no-result">There is no TV show with this title</p>` : ''
    }
`;

export default async function searchView() {

    let clickSearch = false;

    render(seachTemplate(searchShowHandler, clickSearch));

    async function searchShowHandler(e) {
        e.preventDefault();
        page.redirect('/search');
        const formData = new FormData(e.currentTarget);
        const search = formData.get('search');

        if(!search){
            return window.alert('Please fill the field');
        }

        clickSearch = true;

        try{
            const showData = await searchShow(search);
            render(seachTemplate(searchShowHandler, clickSearch, showData));
        }catch(err){
            console.error(err.messsage);
        }
        
    }
}