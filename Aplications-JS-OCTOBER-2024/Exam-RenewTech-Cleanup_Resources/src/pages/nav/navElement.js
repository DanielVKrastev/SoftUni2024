export class NavElement {
    constructor(templateFunction, renderHandler, navigate, authService){
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.authService = authService;
        this.showView = this._showView.bind(this);
        this.logoutHandler = this._logoutHandler.bind(this);
    }

    _showView(ctx, next){
        let isLoggedIn = this.authService.isLoggedIn();
        const template = this.templateFunction(isLoggedIn, this.logoutHandler);
        this.renderHandler(template);

        next();
    }

    async _logoutHandler(){
        const result = await this.authService.logout();
        if(result == true){
            this.navigate('/');
        }
    }
}