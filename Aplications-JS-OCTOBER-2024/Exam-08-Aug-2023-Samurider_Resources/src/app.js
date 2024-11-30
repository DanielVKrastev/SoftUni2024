import page from "./lib/page.js";
import { addRender } from "./middlewares/render.js";
import { addSession } from "./middlewares/session.js";
import addView from "./views/addView.js";
import dashboardView from "./views/dashboardView.js";
import deleteHandler from "./views/deleteHandler.js";
import detailsView from "./views/detailsView.js";
import editView from "./views/editView.js";
import homeView from "./views/homeView.js";
import loginView from "./views/loginView.js";
import logoutHandler from "./views/logoutHandler.js";
import navigationView from "./views/navigationView.js";
import registerView from "./views/registerView.js";
import searchView from "./views/searchView.js";

page(addSession());
page(addRender(document.querySelector('#wrapper main')));

page(navigationView);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/dashboard', dashboardView);
page('/addmotorcycle', addView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteHandler);
page('/search', searchView);

page.start();