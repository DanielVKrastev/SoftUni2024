export class DashboardPage{
    constructor(templateFunction, renderHandler, solutionsService){
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.solutionsService = solutionsService;
        this.showView = this._showView.bind(this);
    }

    async _showView(){
        const solutions = await this.solutionsService.getAll();
       // console.log(solutions);
        
        const template = this.templateFunction(solutions);
        //const template = this.templateFunction([]);
        this.renderHandler(template);
    }
}