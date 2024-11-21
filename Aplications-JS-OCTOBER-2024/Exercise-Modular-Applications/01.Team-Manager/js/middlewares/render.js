import { render } from "lit-html";

export function addRender(root) {
    return function (ctx, next) {
        ctx.render = (templateResult) => render(templateResult, root);

        next();
    }
}