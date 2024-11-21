import page from 'page';
import { homeView } from './views/home.js';
import { addSession } from './middlewares/session.js';
import { addRender } from './middlewares/render.js';
import { teamsView } from './views/teams.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { logoutView } from './views/logout.js';
import { navigationView } from './views/navigation.js';
import { teamDetailsView } from './views/partials/teamDetails.js';

page(addSession());
page(addRender(document.querySelector('main')));

page(navigationView);
page('/', homeView);
page('/teams', teamsView);
page('/teams/:id', teamDetailsView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);


page.start(); 