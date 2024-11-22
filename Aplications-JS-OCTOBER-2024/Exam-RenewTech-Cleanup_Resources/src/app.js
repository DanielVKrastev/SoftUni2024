import page from "../node_modules/page/page.mjs";
import { createRenderHandler } from "./libs/renderer.js";
import { addSolutionTemplate } from "./pages/addSolution/addSolution.js";
import { AddSolutionPage } from "./pages/addSolution/addSolutionPage.js";
import { DashboardPage } from "./pages/dashboard/dashboardPage.js";
import { dashboardTemplate } from "./pages/dashboard/dashboardTemplate.js";
import { DetailsPage } from "./pages/details/detailsPage.js";
import { detailsTemplate } from "./pages/details/detailsTemplate.js";
import { EditSolutionPage } from "./pages/editSolution/editSolutionPage.js";
import { editSolutionTemplate } from "./pages/editSolution/editSolutionTemplate.js";
import { HomePage } from "./pages/home/homePage.js";
import { homeTemplate } from "./pages/home/homeTemplate.js";
import { LoginPage } from "./pages/login/loginPage.js";
import { loginTemplate } from "./pages/login/loginTemplate.js";
import { NavElement } from "./pages/nav/navElement.js";
import { navTemplate } from "./pages/nav/navTemplate.js";
import { RegisterPage } from "./pages/register/registerPage.js";
import { registerTemplate } from "./pages/register/registerTemplate.js";
import { AuthService } from "./services/authService.js";
import { LikesService } from "./services/likesService.js";
import { SolutionsService } from "./services/solutionsService.js";

const serverUrl = 'http://localhost:3030';

const mainElement = document.querySelector('#wrapper main');
const navDomElement = document.querySelector('#wrapper nav');

const mainRenderHandler = createRenderHandler(mainElement);
const navRenderHandler = createRenderHandler(navDomElement);

const authService = new AuthService(serverUrl);
const solutionsService = new SolutionsService(serverUrl);
const likesService = new LikesService(serverUrl); 

const homePage = new HomePage(homeTemplate, mainRenderHandler);
const navElement = new NavElement(navTemplate, navRenderHandler, page.show, authService); 
const loginPage = new LoginPage(loginTemplate, mainRenderHandler, page.show, authService)
const registerPage = new RegisterPage(registerTemplate, mainRenderHandler, page.show, authService);
const dashboardPage = new DashboardPage(dashboardTemplate, mainRenderHandler, solutionsService);
const addSolutionPage = new AddSolutionPage(addSolutionTemplate, mainRenderHandler, page.show, solutionsService);
const detailsPage = new DetailsPage(detailsTemplate, mainRenderHandler, page.show, solutionsService, authService, likesService);
const editSolutionPage = new EditSolutionPage(editSolutionTemplate, mainRenderHandler, page.show, solutionsService);

page(navElement.showView);
page('index.html', '/');

page('/', homePage.showView);
page('/login', loginPage.showView);
page('/register', registerPage.showView);
page('/solutions', dashboardPage.showView);
page('/addSolution', addSolutionPage.showView);
page('/details/:id', detailsPage.showView);
page('/edit/:id', editSolutionPage.showView);

page.start();
