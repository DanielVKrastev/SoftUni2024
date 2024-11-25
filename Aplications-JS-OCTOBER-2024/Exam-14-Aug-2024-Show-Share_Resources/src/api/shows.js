import { request } from "../lib/requests.js";

const baseUrl = 'http://localhost:3030/data/shows';

export const getAllShows = () => {
    return request('GET', `${baseUrl}?sortBy=_createdOn%20desc`);
}

export const getOneShow = (showId) => {
    return request('GET', `${baseUrl}/${showId}`);
}

export const createShow = (showData) => {
    return request('POST', baseUrl, showData);
}

export const editShow = (showId, showData) => {
    return request('PUT', `${baseUrl}/${showId}`, showData);
}

export const removeShow = (showId) => {
    return request('DELETE', `${baseUrl}/${showId}`);
}

export const searchShow = (query) => {
    return request('GET', `${baseUrl}/?where=title%20LIKE%20%22${query}%22`);
}