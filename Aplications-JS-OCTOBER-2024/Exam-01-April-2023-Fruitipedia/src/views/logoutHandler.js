import { logout } from "../api/user.js";
import { clearUserData } from "../utils/userUtils.js";

export default async function logoutHandler(ctx){
    await logout();
    clearUserData();
    ctx.page.redirect('/');
    
}