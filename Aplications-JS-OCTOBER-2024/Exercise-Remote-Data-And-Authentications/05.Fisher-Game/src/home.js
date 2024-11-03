const baseURL = 'http://localhost:3030/data/catches';

const sectionElement = document.getElementById('home-view');
const addCatchForm = sectionElement.querySelector('form');
const divCatches = sectionElement.querySelector('#catches');
const addButton = addCatchForm.querySelector('.add');
addCatchForm.addEventListener('submit', createCatch);

const loadBtn = sectionElement.querySelector('.load');
loadBtn.addEventListener('click', loadCatches);

// Get email and id from local storage
const email = localStorage.getItem('email');
const idUser = localStorage.getItem('_id');
const token = localStorage.getItem('accessToken');

activeAddButton(email);

export default function homePage(){
    sectionElement.style.display = 'block'
}

function activeAddButton(email){
    if(email && email !== 'undefined'){
        addButton.disabled = false;
    }else{
        addButton.disabled = true;
    }
}

function loadCatches(){

    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            const catches = Object.values(data);
            divCatches.innerHTML = '';
            divCatches.append(...catches.map(renderCatch))
        })
}

function renderCatch(catching){
    const divCatch = createElem('div', '', ['class', 'catch', 'owner-id', catching._ownerId]);

    const anglerLabel = createElem('label', 'Angler');
    const anglerInput = createElem('input', '', ['type', 'text', 'class', 'angler', 'value', catching.angler]);
    anglerInput.disabled = true;

    const weightLabel = createElem('label', 'Weight');
    const weightInput = createElem('input', '', ['type', 'text', 'class', 'weight', 'value', catching.weight]);
    weightInput.disabled = true;

    const speciesLabel = createElem('label', 'Species');
    const speciesInput = createElem('input', '', ['type', 'text', 'class', 'species', 'value', catching.species]);
    speciesInput.disabled = true;

    const locationLabel = createElem('label', 'Location');
    const locationInput = createElem('input', '', ['type', 'text', 'class', 'location', 'value', catching.location]);
    locationInput.disabled = true;

    const baitLabel = createElem('label', 'Bait');
    const baitInput = createElem('input', '', ['type', 'text', 'class', 'bait', 'value', catching.bait]);
    baitInput.disabled = true;

    const captureTimeLabel = createElem('label', 'Capture Time');
    const captureTimeInput = createElem('input', '', ['type', 'number', 'class', 'captureTime', 'value', catching.captureTime]);
    captureTimeInput.disabled = true;

    const updateBtn = createElem('button', 'Update', ['class', 'update', 'data-id', catching._id]);
    updateBtn.disabled = true;
    updateBtn.addEventListener('click', updateCatch);

    const deleteBtn = createElem('button', 'Delete', ['class', 'delete', 'data-id', catching._id]);
    deleteBtn.disabled = true;
    deleteBtn.addEventListener('click', deleteCatch);

    // Enabled inputs and buttons when owner create
    if(catching._ownerId === idUser){
        anglerInput.disabled = false;
        weightInput.disabled = false;
        speciesInput.disabled = false;
        locationInput.disabled = false;
        baitInput.disabled = false;
        captureTimeInput.disabled = false;
        updateBtn.disabled = false;
        deleteBtn.disabled = false;
    }

    //!!!!!!!
    divCatch.append(anglerLabel, anglerInput,
                    weightLabel, weightInput,
                    speciesLabel, speciesInput,
                    locationLabel, locationInput, 
                    baitLabel, baitInput, 
                    captureTimeLabel, captureTimeInput,
                    updateBtn, deleteBtn);
    
    return divCatch;
}

function createCatch(event){
    event.preventDefault();
    const { angler, weight, species, location, bait, captureTime} = Object.fromEntries(new FormData(event.currentTarget));

    if(angler === '' || weight === '' || species === '' || location === '' || bait === '' || captureTime === ''){
        return;
    }
    
    const body = JSON.stringify({
        angler: angler,
        weight: weight,
        species: species,
        location: location,
        bait: bait,
        captureTime: captureTime
    });

    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: body,
    };

    fetch(baseURL, settings)
        .then(res => res.json())
        .then(data => {
            loadCatches();
        })
        .catch(err => alert(err.message));
}

function deleteCatch(element){
    const deleteBtn = element.target;
    const catchDiv = deleteBtn.parentNode;
    const id = deleteBtn.dataset.id;

    fetch(`${baseURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
        }
    })
    .then(res => res.json())
    .then(res => {})
    .catch(err => alert(err.message));

    catchDiv.remove();
}

function updateCatch(element){
    const updateBtn = element.target;
    const catchDiv = updateBtn.parentNode;
    const id = updateBtn.dataset.id;

    const anglerInput = catchDiv.querySelector('.angler');
    const weightInput = catchDiv.querySelector('.weight');
    const speciesInput = catchDiv.querySelector('.species');
    const locationInput = catchDiv.querySelector('.location');
    const baitInput = catchDiv.querySelector('.bait');
    const captureTimeInput = catchDiv.querySelector('.captureTime');

    const angler = anglerInput.value;
    const weight = weightInput.value;
    const species = speciesInput.value;
    const location = locationInput.value;
    const bait = baitInput.value;
    const captureTime = captureTimeInput.value;

    const body = JSON.stringify({
        "angler": angler,
        "weight": weight,
        "species": species,
        "location": location,
        "bait": bait,
        "captureTime": captureTime
    });

    const settings = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: body,
    };

    fetch(`${baseURL}/${id}`, settings)
        .then(res => res.json())
        .then(data => {
            loadCatches();
        })
        .catch(err => alert(err.message));
    
}

function createElem(type, content = '', attributes = []){
    const element = document.createElement(type);

    if(content){
        element.textContent = content;
    }

    if(attributes.length > 0){
        for(let i = 0; i < attributes.length; i+=2){
            element.setAttribute(attributes[i],attributes[i+1]);
        }
    }

    return element;
}