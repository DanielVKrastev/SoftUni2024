import { renderNavigation } from "./src/navigation.js";
import homePage from "./src/home.js";
import logout from "./src/logout.js";
import loginPage from "./src/login.js";
import registerPage from "./src/register.js";

const pathNames = {
    '/': homePage,
    '/logout': logout,
    '/login': loginPage,
    '/register': registerPage
}

function navigationClick() {
    const navELement = document.querySelector('header nav');

    navELement.addEventListener('click', (event) => {
        if(event.target.tagName !== 'A'){
            return;
        }

        event.preventDefault();

        const url = new URL(event.target.href);
        const pathname = url.pathname;
        
        //hide old section
        const siteSections = document.querySelectorAll('#views .site-section');
        siteSections.forEach(section => section.style.display = 'none');
        
        pathNames[pathname]();
    });
    
    pathNames['/']();
    renderNavigation();
}

navigationClick();