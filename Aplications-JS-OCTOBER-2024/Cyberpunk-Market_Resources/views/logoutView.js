import { logout } from "../api/usersApi.js";
import page from "../lib/page.js";
import { clearUserData } from "../utils/userUtils.js";

export default async function logoutView(ctx) {

    // Check if logged in!


    try{
        // Make a logout request
        await logout();

        // !Edge case: expired token

        //Clear user session
        clearUserData();
        //Redirect
        page.redirect('/');

    } catch(err){
        console.error(err.message);
    };
}