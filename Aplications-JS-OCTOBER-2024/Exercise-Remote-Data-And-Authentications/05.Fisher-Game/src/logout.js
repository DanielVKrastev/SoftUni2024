import homePage from "./home.js";
import { renderNavigation } from "./navigation.js";

const baseUrl = 'http://localhost:3030/users/logout';

export default function logout(){
    const token = localStorage.getItem('accessToken');

    fetch(baseUrl, {
        headers: {
            'X-Authorization': token, 
        }
    })
    .then(() => {
        localStorage.clear();
        location.reload();
    })
}