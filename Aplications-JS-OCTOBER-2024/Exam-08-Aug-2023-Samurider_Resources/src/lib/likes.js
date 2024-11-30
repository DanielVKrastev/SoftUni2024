import { getUserData } from "../utils/userUtils.js";

const baseUrl = 'http://localhost:3030/data/likes';

async function getAllForFacts(id){
    
    const settings = {
        method: 'GET',
    };

    const response = await fetch(`${baseUrl}?where=factId%3D%22${id}%22&distinct=_ownerId&count`, settings);
    if( ! response.ok){
        window.alert('Failed to fetch likes');
        return;
    }
    const result = await response.json();
    return result;
}

async function getAllForFactAndUser(id, userId){
    
    const settings = {
        method: 'GET',
    };

    const response = await fetch(`${baseUrl}?where=factId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`, settings);
    if( ! response.ok){
        window.alert('Failed to fetch likes');
        return;
    }
    const result = await response.json();
    return result;
}

async function addLike(like){
    
    const accessToken = getUserData().accessToken;
    
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
        body: JSON.stringify(like)
    }

    const response = await fetch(baseUrl, settings);
    if(!response.ok){
        window.alert('Failed to create like');
    }

    const result = await response.json();

    return result;
}

export {
    getAllForFacts,
    getAllForFactAndUser,
    addLike
}