import { search } from "../api/motorcycle.js";
import { html, render } from "../lib/lit-html.js";

const template = (searchSubmitHandler, motorcycles) => html`        

       <!-- Search page -->
       <section id="search">

        <div class="form">
          <h4>Search</h4>
          <form class="search-form" @submit=${searchSubmitHandler}>
            <input
              type="text"
              name="search"
              id="search-input"
            />
            <button class="button-list">Search</button>
          </form>
        </div>
        <h4 id="result-heading">Results:</h4>
          <div class="search-result">
            ${
              motorcycles.length === 0 
              ? html`<h2 class="no-avaliable">No result.</h2>`
              : ''
            }
         
          <!--If there are matches display a div with information about every motorcycle-->
          ${
            motorcycles.map(moto => html`
            <div class="motorcycle">
              <img src="${moto.imageUrl}" alt="${moto.model}" />
              <h3 class="model">${moto.model}</h3>
                <a class="details-btn" href="/details/${moto._id}">More Info</a>
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
    const searchModel = formData.get('search');

    if(! searchModel){
      return;
    }

    try{
      const motoSearchData = await search(searchModel);
      ctx.render(template(searchSubmitHandler, motoSearchData));
      
    }catch(err){
      alert(err.message);
    }
  }

}