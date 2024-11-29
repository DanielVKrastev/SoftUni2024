import { request } from "../lib/requests.js";

const baseUrl = 'http://localhost:3030/data/facts';

export const getAll = () => {
    return request('GET', `${baseUrl}?sortBy=_createdOn%20desc`);
}

export const getOne = (id) => {
    return request('GET', `${baseUrl}/${id}`);
}

export const create = (data) => {
    return request('POST', baseUrl, data);
}

export const edit = (id, data) => {
    return request('PUT', `${baseUrl}/${id}`, data);
}

export const remove = (id) => {
    return request('DELETE', `${baseUrl}/${id}`);
}