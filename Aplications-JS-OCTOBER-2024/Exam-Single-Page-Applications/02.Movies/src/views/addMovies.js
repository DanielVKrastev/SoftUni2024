import homePage from "./home.js";

const baseURL = 'http://localhost:3030/data/movies';

const sectionElement = document.getElementById('add-movie');
const addForm = sectionElement.querySelector('#add-movie-form');


// Get data from local storage
const token = localStorage.getItem('accessToken');

export default function addMoviesPage(){
    sectionElement.style.display = 'block';
}

addForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {title, description, img} = Object.fromEntries(new FormData(event.currentTarget));

    if(title === '' || description === '' || img === '') {
        return;
    }

    try{
        const body = JSON.stringify({
            title: title,
            description: description,
            img: img,
        });

        const settings = {
            method: 'POST',
            headers: {
                'X-Authorization': token,
                'Content-Type': 'application/json',
            },
            body: body,
        };

        const response = await fetch(baseURL, settings);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const dataRes = await response.json();

        if(response.status >= 200){
            addForm.reset();
            sectionElement.style.display = 'none';
            homePage();
        }
    }
    catch(err){
        console.error(err.message);
        addForm.reset();
    }
})
