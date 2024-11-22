import { render } from "../../node_modules/lit-html/lit-html.js";

export function createRenderHandler(domElement){
    return function(template){
        return render(template,domElement);
    }
}