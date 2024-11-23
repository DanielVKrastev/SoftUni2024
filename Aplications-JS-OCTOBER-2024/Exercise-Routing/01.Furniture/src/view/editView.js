import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

const editTemp = (item, editFurniture) => html`            
     <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${editFurniture}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${item.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" value="${item.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" value="${item.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${item.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${item.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${item.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${item.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>`;

let context = null;
export async function showEditView(ctx) {
    context = ctx;
    const itemId = context.params.id;
    const data = await dataService.getFurnitureDetails(itemId);
    
    context.render(editTemp(data, editFurniture));
}

async function editFurniture(e) {
    e.preventDefault();
    const itemId = context.params.id;
    
    const formData = new FormData(e.currentTarget);
    const make = formData.get('make');
    const model = formData.get('model');
    const year = formData.get('year');
    const description = formData.get('description');
    const price = formData.get('price');
    const img = formData.get('img');
    const material = formData.get('material');

    const makeEl = document.getElementById('new-make');
    const modelEl = document.getElementById('new-model');
    const yearEl = document.getElementById('new-year');
    const descriptionEl = document.getElementById('new-description');
    const priceEl = document.getElementById('new-price');
    const imgEl = document.getElementById('new-image');
    const materialEl = document.getElementById('new-material');

    if(!make || make.length < 4){
        makeEl.setAttribute("class", "form-control is-invalid");
        return;
    }else{
        makeEl.setAttribute("class", "form-control is-valid");
    }

    if(!model || model.length < 4){
        modelEl.setAttribute("class", "form-control is-invalid");
        return;
    }else{
        modelEl.setAttribute("class", "form-control is-valid");
    }

    if(!year || year < 1950 || year > 2050){
        yearEl.setAttribute("class", "form-control is-invalid");
        return;
    }else{
        yearEl.setAttribute("class", "form-control is-valid");
    }

    if(!description || description.length <= 10){
        descriptionEl.setAttribute("class", "form-control is-invalid");
        return;
    }else{
        descriptionEl.setAttribute("class", "form-control is-valid");
    }

    if(!price || price < 0){
        priceEl.setAttribute("class", "form-control is-invalid");
        return;
    }else{
        priceEl.setAttribute("class", "form-control is-valid");
    }

    if(!img){
        imgEl.setAttribute("class", "form-control is-invalid");
        return;
    }else{
        imgEl.setAttribute("class", "form-control is-valid");
    }
    
    const data = {
        make,
        model,
        year,
        description,
        price,
        img,
        material
    }

    const editFurniture = dataService.updateFurniture(itemId, data);
    if(editFurniture){
        context.goTo('/dashboard');
    }
}