export class AddSolutionPage {

    constructor(templateFunction, renderHandler, navigate, solutionsService){
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.solutionsService = solutionsService;
        this.showView = this._showView.bind(this);
        this.addSolutionHandler = this._addSolutionHandler.bind(this);
    }
    
    _showView() {
        const template = this.templateFunction(this.addSolutionHandler);
        this.renderHandler(template);
    }

    async _addSolutionHandler(e) {
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

        const solution = {
            type,
            imageUrl,
            description,
            learnMore
        }

        const result = await this.solutionsService.addSolution(solution);
        if(result){
            this.navigate('/solutions');
        }
    }
}