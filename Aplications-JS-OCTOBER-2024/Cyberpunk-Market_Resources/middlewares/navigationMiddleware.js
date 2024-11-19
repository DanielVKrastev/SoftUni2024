import navigationView from "../views/navigationView.js";

 export const navigationMiddleware = (ctx, next) => {

    navigationView();

    next();
 }