import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
import { userHelper } from "../utility/userHelper.js";

const detailsTemp = (item, hasOwner, deleteFurniture) => html`            
   <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="../${item.img}" alt='${item.make}'/>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price}</span></p>
                <p>Material: <span>${item.material}</span></p>

                ${
                    hasOwner
                    ? html `
                <div>
                    <a href="/edit/${item._id}" class="btn btn-info" >Edit</a>
                    <a href="javascript:void(0)" class="btn btn-red" @click=${deleteFurniture}>Delete</a>
                </div>
                    `
                    : ''
                }

            </div>
        </div>`;

export async function showDetailsView(ctx) {
    const itemId = ctx.params.id;
    
    const data = await dataService.getFurnitureDetails(itemId);

    const itemOwnerId = data._ownerId;

    const hasOwner = userHelper.hasOwner(itemOwnerId);
    
    ctx.render(detailsTemp(data, hasOwner, deleteFurniture));

    async function deleteFurniture() {
        const confirm = window.confirm('Are you sure you want to delete this item?');

        if(confirm){
            await dataService.deleteFurniture(itemId);
            ctx.goTo('/dashboard');
        }
    }
}

