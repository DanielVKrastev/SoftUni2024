import { search } from "../api/cars.js";
import { html, render } from "../lib/lit-html.js";

const template = (searchSubmitHandler, cars) => html`        
<!-- Search page -->
<section id="search">
  <div class="form">
    <h4>Search</h4>
    <form class="search-form" @submit=${searchSubmitHandler}>
      <input type="text" name="search" id="search-input" />
      <button class="button-list">Search</button>
    </form>
  </div>
  <div class="search-result">
    ${
      cars.length === 0
      ? html`<h2 class="no-avaliable">No result.</h2>`
      : ''
    }

    ${
      cars.map(car => html`
      <div class="car">
        <img src="${car.imageUrl}" alt="${car.model}"/>
        <h3 class="model">${car.model}</h3>
        <a class="details-btn" href="/details/${car._id}">More Info</a>
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
      const carSearchData = await search(searchModel);
      ctx.render(template(searchSubmitHandler, carSearchData));
      
    }catch(err){
      alert(err.message);
    }
  }

}