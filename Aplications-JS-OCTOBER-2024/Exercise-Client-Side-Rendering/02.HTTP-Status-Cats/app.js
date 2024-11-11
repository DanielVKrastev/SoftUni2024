import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

render(createCatList(cats), root);

function createCatList(cats) {

    return html`
    <ul>
        ${cats.map(cat => createCatCard(cat))}
    </ul>
    `;
}

function createCatCard(cat){
    return html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${toggle} class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
    `;
}

function toggle(e){
    const container = e.target.parentNode.querySelector('div .status');

    const isHidden = container.style.display === 'none';

    container.style.display = isHidden ? 'block' : 'none';

    e.target.textContent = isHidden ?  'Hide status code' : 'Show status code';
}