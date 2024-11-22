import { html } from "../../../node_modules/lit-html/lit-html.js";

export const dashboardTemplate = (solutions) => html`
<!-- Dashboard page -->
<h2>Solutions</h2>

    ${(solutions.length > 0)
    ? html `<section id="solutions">
                ${ solutions.map(s => solutionTemplate(s)) }
            </section>` 
    : html`<h2 id="no-solution">No Solutions Added.</h2>`
    }
`;

const solutionTemplate = (solution) => html`
  <div class="solution">
    <img src="${solution.imageUrl}" alt="${solution.type}" />
    <div class="solution-info">
      <h3 class="type">${solution.type}</h3>
      <p class="description">
        ${solution.description}
      </p>
      <a class="details-btn" href="/details/${solution._id}">Learn More</a>
    </div>
  </div>
  `;