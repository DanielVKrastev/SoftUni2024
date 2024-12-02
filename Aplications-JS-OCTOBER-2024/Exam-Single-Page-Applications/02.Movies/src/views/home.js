import addMoviesPage from "./addMovies.js";
import loginPage from "./login.js";
import movieDetailsPage from "./movieDetails.js";

const baseURL = 'http://localhost:3030/data/movies';

const sectionElement = document.getElementById('home-page');

// Get list with movies
const listMovies = sectionElement.querySelector('#movies-list');

export default function homePage(){
    sectionElement.style.display = 'block';
    loadMovies();

    const addMovieBtn = sectionElement.querySelector('#add-movie-button a');
    addMovieBtn.addEventListener('click', renderAddMovie);
    visibleAddMovieBtn(addMovieBtn);

}

// Function for visible add movie button
function visibleAddMovieBtn(element){
    const email = localStorage.getItem('email');
    const accessToken = localStorage.getItem('accessToken');

    if(email && email !== 'undefined' && accessToken) {
        element.style.display = 'inline-block';
    }else{
        element.style.display = 'none';
    }
}

// For load all movies
async function loadMovies(){
    try{
        const response = await fetch(baseURL);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const dataRes = await response.json();
        const moviesData = Object.values(dataRes);
        listMovies.innerHTML = '';
        listMovies.append(...moviesData.map(renderMovies))

    }catch{
        listMovies.innerHTML = 'No movies in database';
    }
}

function renderMovies(movie){
    const liElement = document.createElement('li');
    liElement.className = 'card mb-4';

    const imgElement = document.createElement('img');
    imgElement.className = 'card-img-top';
    imgElement.src = movie.img;
    imgElement.setAttribute('alt', 'Card image cap');
    imgElement.setAttribute('width', '400');

    const divBody = document.createElement('div');
    divBody.className = 'card-body';
    divBody.innerHTML = `<h4 class="card-title">${movie.title}</h4>
                                <a href="/details"></a>
                        `;
    const divFooter = document.createElement('div');
    divFooter.className = 'card-footer';

    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'btn btn-info';
    detailsBtn.textContent = 'Details';
    detailsBtn.setAttribute('type', 'button');
    detailsBtn.setAttribute('data-id', movie._id);
    detailsBtn.addEventListener('click', renderDetailsMovie);

    divFooter.appendChild(detailsBtn);
    liElement.appendChild(imgElement);
    liElement.appendChild(divBody);
    liElement.appendChild(divFooter);

    return liElement;
}

// For open details for current movie
function renderDetailsMovie(event){

    sectionElement.style.display = 'none';
    movieDetailsPage(event.target.dataset.id);

}

// For add movie
function renderAddMovie(event){
    event.preventDefault();

    sectionElement.style.display = 'none';
    addMoviesPage();
}