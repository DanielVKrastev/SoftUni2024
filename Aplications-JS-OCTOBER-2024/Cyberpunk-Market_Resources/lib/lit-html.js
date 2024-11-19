import { render as baseRender, html } from '../node_modules/lit-html/lit-html.js';

const mainElement = document.getElementById('main-element');

export const render = (templateResult) => baseRender(templateResult, mainElement);
export {
    html,
    baseRender,
}