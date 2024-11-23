import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userHelper } from './utility/userHelper.js';
import { showDashboardView } from './view/dashboardView.js';
import { showRegisterView } from './view/registerView.js';
import { showLoginView } from './view/loginView.js';
import { showLogoutView } from './view/logoutView.js';
import { showDetailsView } from './view/detailsView.js';
import { showCreateView } from './view/createView.js';
import { showMyFurnitureView } from './view/MyFurnitureView.js';
import { showEditView } from './view/editView.js';

const root = document.querySelector('div[data-id="root"]');
const userNavigation = document.getElementById('user');
const guestNavigation = document.getElementById('guest');

page(updateCTX);
page('/', showDashboardView);
page('/dashboard', showDashboardView);
page('/register', showRegisterView);
page('/login', showLoginView);
page('/logout', showLogoutView);
page('/create', showCreateView);
page('/details/:id', showDetailsView);
page('/edit/:id', showEditView);
page('/myFurniture', showMyFurnitureView);
page();

updateNav();

function renderer(temp) {
    render(temp, root);
}

function updateCTX(ctx, next) {
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;
    next();
}

function updateNav() {
    const user = userHelper.getUserData();

    if (user) {
        userNavigation.style.display = 'inline-block';
        guestNavigation.style.display = 'none';
    } else {
        userNavigation.style.display = 'none';
        guestNavigation.style.display = 'inline-block';
    }
}

function goTo(path) {
    page.redirect(path);
}