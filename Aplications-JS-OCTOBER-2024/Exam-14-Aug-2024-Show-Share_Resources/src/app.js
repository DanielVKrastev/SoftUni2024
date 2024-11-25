import page from './lib/page.js';
import { navMiddleWare } from './middlewares/navMiddleWare.js';
import addShowView from './views/addShowView.js';
import dashboardView from './views/dashboardView.js';
import detailsView from './views/detailsView.js';
import editShowView from './views/editShowView.js';
import homeView from './views/homeView.js';
import loginView from './views/loginView.js';
import logoutUser from './views/logout.js';
import registerView from './views/registerView.js';
import searchView from './views/searchView.js';

page(navMiddleWare);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutUser);
page('/dashboard', dashboardView);
page('/addshow', addShowView);
page('/details/:id', detailsView);
page('/edit/:id', editShowView);
page('/search', searchView);


page.start();