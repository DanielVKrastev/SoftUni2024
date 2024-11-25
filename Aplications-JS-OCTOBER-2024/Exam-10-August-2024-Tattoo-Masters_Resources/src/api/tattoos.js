import { request } from "../lib/requests.js";

const baseUrl = 'http://localhost:3030/data/tattoos';

export const getAllTattoos = () => {
    return request('GET', `${baseUrl}?sortBy=_createdOn%20desc`);
}

export const getOneTattoo = (tattooId) => {
    return request('GET', `${baseUrl}/${tattooId}`);
}

export const createTattoo = (tattooData) => {
    return request('POST', baseUrl, tattooData);
}

export const editTattoo = (tattooId, tattooData) => {
    return request('PUT', `${baseUrl}/${tattooId}`, tattooData);
}

export const removeTattoo = (tattooId) => {
    return request('DELETE', `${baseUrl}/${tattooId}`);
}
