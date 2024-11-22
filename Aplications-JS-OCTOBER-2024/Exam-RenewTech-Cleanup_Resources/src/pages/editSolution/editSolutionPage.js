export class EditSolutionPage {

    constructor(templateFunction, renderHandler, navigate, solutionsService){
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.solutionsService = solutionsService;
        this.showView = this._showView.bind(this);
        this.editSolutionHandler = this._editSolutionHandler.bind(this);
        this.id = undefined;
    }

    async _showView(ctx){
        const id = ctx.params.id;
        this.id = id;
        const solution = await this.solutionsService.get(this.id);
        const template = this.templateFunction(solution, this.editSolutionHandler);
        this.renderHandler(template);
    }

    async _editSolutionHandler(e){
        e.preventDefault();
        const formData = new FormData(e.target);

        const type = formData.get('type');
        const imageUrl = formData.get('image-url');
        const description = formData.get('description');
        const learnMore = formData.get('more-info');

        if(!type || !imageUrl || !description || !learnMore){
            window.alert('Please fill in the fields');
            return;
        }

        const editSolution = {
            type,
            imageUrl,
            description,
            learnMore
        }

        const result = await this.solutionsService.editSolution(this.id ,editSolution);
        //console.log(result);

        if(result){
            this.navigate(`/details/${this.id}`)
        }
        
    }
}