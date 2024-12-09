import { request } from "../lib/requests.js";

const baseUrl = 'http://localhost:3030/data/drones';

export const getAll = () => {
    return request('GET', `${baseUrl}?sortBy=_createdOn%20desc`);
}

export const getOne = (carId) => {
    return request('GET', `${baseUrl}/${carId}`);
}

export const create = (carData) => {
    return request('POST', baseUrl, carData);
}

export const edit = (carId, carData) => {
    return request('PUT', `${baseUrl}/${carId}`, carData);
}

export const remove = (carId) => {
    return request('DELETE', `${baseUrl}/${carId}`);
}
