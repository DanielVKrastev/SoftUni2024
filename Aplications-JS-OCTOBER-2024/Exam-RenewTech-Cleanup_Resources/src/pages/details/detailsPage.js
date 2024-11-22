export class DetailsPage {
    constructor(templateFunction, renderHandler, navigate, solutionsService, authService, likesService){
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.solutionsService = solutionsService;
        this.authService = authService;
        this.likesService = likesService;
        this.showView = this._showView.bind(this);
        this.deleteHandler = this._deleteHandler.bind(this);
        this.likesHandler = this._likesHandler.bind(this);
    }

    async _showView(ctx){
        const id = ctx.params.id;
        const solution = await this.solutionsService.get(id);
        
        const userId = this.authService.getUserId();

        const isCreator = solution._ownerId === userId;

        //likes count
        const likesCount = await this.likesService.getAllForSolution(id);

        //is loggedIn
        const isLoggedIn = this.authService.isLoggedIn();
        
        //has liked
        const userLikes = await this.likesService.getAllForSolutionAndUser(solution._id, userId);
        let hasLiked = userLikes > 0;

        const template = this.templateFunction(solution, isCreator, this.deleteHandler, likesCount, isLoggedIn, hasLiked, this.likesHandler);
        this.renderHandler(template);
    }

    async _deleteHandler(id) {
        const choice = window.confirm('Are you sure you want to delete this solution?');
        if(choice){
            const result = await this.solutionsService.deleteSolution(id);
            if(result){
                this.navigate('/solutions');
            }
        }
    }

    async _likesHandler(solutionId){
        const like = {solutionId};
        const result = await this.likesService.addLike(like);
        if(result){
            this.navigate(`/details/${solutionId}`);
        }
    }
}