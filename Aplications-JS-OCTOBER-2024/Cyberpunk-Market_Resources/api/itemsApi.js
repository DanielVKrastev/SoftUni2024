import { request } from "../lib/requests.js";

const baseUrl = `http://localhost:3030/data/cyberpunk`;

export const getAll = () => request('GET', `${baseUrl}?sortBy=_createdOn%20desc`);

export const getOne = (itemId) => request('GET', `${baseUrl}/${itemId}`);

export const create = (itemData) => request('POST', baseUrl, itemData);

export const edit = (itemId, data) => request('PUT', `${baseUrl}/${itemId}`, data);

export const remove = (itemId) => request('DELETE', `${baseUrl}/${itemId}`);