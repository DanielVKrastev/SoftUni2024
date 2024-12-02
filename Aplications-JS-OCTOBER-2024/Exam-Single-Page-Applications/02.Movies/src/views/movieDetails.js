import editMoviePage from "./editMovie.js";
import homePage from "./home.js";

const baseURL = 'http://localhost:3030/data/movies';

const userId = localStorage.getItem('_id');

const sectionElement = document.getElementById('movie-example');

// Get data from local storage
const token = localStorage.getItem('accessToken');

const pathNames = {
    '/delete-movie': deleteMovie,
    '/edit-movie': editMoviePage,
    '/like-movie': likeMovie,
}

export default function movieDetailsPage(movieID){
    sectionElement.style.display = 'block';
    loadMovie(movieID);
    
    const actionButton = sectionElement.querySelector('.col-md-4');


}

async function loadMovie(movieID){

        const response = await fetch(`${baseURL}/${movieID}`);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const movieData = await response.json();
        
        sectionElement.innerHTML = '';
        sectionElement.append(renderMovie(movieData));

    
}

function renderMovie(movie){
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    const rowDiv = document.createElement('div');
    rowDiv.className = 'row bg-light text-dark';

    const titleH1 = document.createElement('h1');
    titleH1.textContent = `Movie title: ${movie.title}`

    const colDiv8 = document.createElement('div');
    colDiv8.className = 'col-md-8';

    const imgElement = document.createElement('img');
    imgElement.className = 'img-thumbnail';
    imgElement.src = movie.img;
    imgElement.setAttribute('alt', 'Movie');

    const colDiv4 = document.createElement('div');
    colDiv4.className = 'col-md-4 text-center';

    // add event for click A href, no reload new page
    colDiv4.addEventListener('click', (event) => {
        if(event.target.tagName !== 'A'){
            return;
        }

        event.preventDefault();

        const url = new URL(event.target.href);
        const pathname = url.pathname;
        
        if(pathname === '/edit-movie'){
            sectionElement.style.display = 'none';
            pathNames[pathname](movie._id);
        }else if(pathname === '/delete-movie'){
            pathNames[pathname](movie._id);
        }else{
            pathNames[pathname]();
        }
    })

    const movieDescriptionH3 = document.createElement('h3');
    movieDescriptionH3.className = 'my-3';
    movieDescriptionH3.textContent = 'Movie Description';

    const descriptionPar = document.createElement('p');
    descriptionPar.textContent = movie.description;

    const likeBtn = document.createElement('a');
    likeBtn.className = 'btn btn-primary';
    likeBtn.href = '/like-movie';
    likeBtn.textContent = 'Like';

    colDiv8.appendChild(imgElement);

    //check shoud owner create current movie
    if(movie._ownerId == userId){
        const deleteBtn = document.createElement('a');
        deleteBtn.className = 'btn btn-danger';
        deleteBtn.href = '/delete-movie';
        deleteBtn.textContent = 'Delete';
    
        const editBtn = document.createElement('a');
        editBtn.className = 'btn btn-warning';
        editBtn.href = '/edit-movie';
        editBtn.setAttribute('data-id', movie._id);
        editBtn.textContent = 'Edit';
    
        const spanLikes = document.createElement('span');
        spanLikes.className = 'enrolled-span';
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
        spanLikes.textContent = 'Liked 1';

        colDiv4.append(movieDescriptionH3, descriptionPar, deleteBtn, editBtn, likeBtn, spanLikes);
    }else{
        colDiv4.append(movieDescriptionH3, descriptionPar, likeBtn);
    }

    rowDiv.append(titleH1, colDiv8, colDiv4);
    containerDiv.appendChild(rowDiv);

    return containerDiv;
}
async function deleteMovie(movieID){
    const response = await fetch(`${baseURL}/${movieID}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
        },
    });

    if (response.ok == false) {
        const error = await response.json();
        throw new Error(error.message);
    }

    if(response.status >= 200){
        sectionElement.style.display = 'none';
        homePage();
    }
}

function likeMovie(){
    console.log('like');
}