import navigationView from "../views/navigationView.js";

export const navMiddleWare = (ctx, next) => {
    navigationView();

    next();
}