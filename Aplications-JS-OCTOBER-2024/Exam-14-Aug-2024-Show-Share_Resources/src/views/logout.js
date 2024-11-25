import { logout } from "../api/user.js";
import page from "../lib/page.js";
import { clearUserData, getUserData } from "../utils/userUtils.js";


export default async function logoutUser() {
    try{
        // Make a logout request
        await logout();

        //Clear user session
        clearUserData();
        //Redirect
        page.redirect('/');

    } catch(err){
        console.error(err.message);
    };
}