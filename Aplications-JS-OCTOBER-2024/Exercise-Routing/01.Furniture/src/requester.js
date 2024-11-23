import { userHelper } from "./utility/userHelper.js";

async function requester(method, url, data) {

    const option = {
        method,
        headers: {},
    };

    const accessToken = userHelper.getUserToken();

    if (accessToken) {
        option.headers[`X-Authorization`] = accessToken;
    }

    if (data) {
        option.headers['Content-type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, option);

        return await response.json();

    } catch (error) {
        alert(error.message);
    }

}

async function get(url) {
    return requester('GET', url);
}

async function post(url, data) {
    return requester('POST', url, data);
}

async function put(url, data) {
    return requester('PUT', url, data);
}

async function del(url) {
    return requester('DELETE', url);
}

export const api = {
    get,
    put,
    post,
    del
}