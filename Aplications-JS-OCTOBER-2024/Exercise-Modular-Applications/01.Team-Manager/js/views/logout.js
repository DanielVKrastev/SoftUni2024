import { logout } from "../data/users.js";


export async function logoutView(ctx){
    try{
        await logout();
        ctx.page.redirect('/');
    }catch(err){
        err.handled = true;
    }
}

