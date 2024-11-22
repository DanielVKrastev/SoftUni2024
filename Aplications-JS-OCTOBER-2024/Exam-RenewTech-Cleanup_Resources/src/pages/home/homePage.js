export class HomePage {
    constructor(templateFunction, renderHandler) {
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.showView = this._showView.bind(this);
    }

    _showView(){
        const template = this.templateFunction();
        this.renderHandler(template);
    }
}