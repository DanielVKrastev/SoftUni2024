import { search } from "../api/fruits.js";
import { html, render } from "../lib/lit-html.js";

const template = (searchSubmitHandler, fruits) => html`        

       <!-- Search page -->
       <section id="search">

        <div class="form">
          <h2>Search</h2>
          <form class="search-form" @submit=${searchSubmitHandler}>
            <input
              type="text"
              name="search"
              id="search-input"
            />
            <button class="button-list">Search</button>
          </form>
        </div>
        <h4>Results:</h4>
          <div class="search-result">
            ${
              fruits.length === 0 
              ? html`<p class="no-result">No result.</p>`
              : ''
            }
         
          <!--If there are matches display a div with information about every motorcycle-->
          ${
            fruits.map(fruit => html`
             <div class="fruit">
              <img src="${fruit.imageUrl}" alt="${fruit.name}" />
              <h3 class="title">${fruit.name}</h3>
              <p class="description">${fruit.description}</p>
              <a class="details-btn" href="details/${fruit._id}">More Info</a>
            </div>
              `)
          }

          </div>
      </section>
`;

export default function searchView(ctx){

  ctx.render(template(searchSubmitHandler, []));

  async function searchSubmitHandler(e) {
    e.preventDefault();
    ctx.render(template(searchSubmitHandler, []));

    const formData = new FormData(e.currentTarget);
    const searchFruit = formData.get('search');

    if(! searchFruit){
      return;
    }

    try{
      const fruitSearchData = await search(searchFruit);
      ctx.render(template(searchSubmitHandler, fruitSearchData));
      
    }catch(err){
      alert(err.message);
    }
  }

}