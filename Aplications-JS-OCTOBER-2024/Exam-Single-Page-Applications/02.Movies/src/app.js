import addMoviesPage from "./views/addMovies.js";
import homePage from "./views/home.js";
import loginPage from "./views/login.js";
import logout from "./views/logout.js";
import { renderNavigation } from "./views/navigation.js";
import registerPage from "./views/register.js";

const pathNames = {
    '/': homePage,
    '/logout': logout,
    '/login': loginPage,
    '/register': registerPage,
    '/add-movie': addMoviesPage,
}

function navigationClick() {
    const navElement = document.querySelector('.navbar');
    
    navElement.addEventListener('click', (event) => {
        if(event.target.tagName !== 'A'){
            return;
        }

        event.preventDefault();

        const url = new URL(event.target.href);
        const pathname = url.pathname;

        //hide old section
        const siteSections = document.querySelectorAll('#container .view-section');
        siteSections.forEach(section => section.style.display = 'none');
        
        
        pathNames[pathname]();
    })

    renderNavigation();
    pathNames['/']();
}


navigationClick();