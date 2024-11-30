import { render } from "../../node_modules/lit-html/lit-html.js";

export function addRender(root) {
    return function (ctx, next) {
        ctx.render = (templateResult) => render(templateResult, root);

        next();
    }
}