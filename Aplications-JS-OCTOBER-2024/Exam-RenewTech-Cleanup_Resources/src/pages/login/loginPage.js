export class LoginPage {
    constructor(templateFunction, renderHandler, navigate, authService){
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.authService = authService;
        this.showView = this._showView.bind(this);
        this.loginHandler = this._loginHandler.bind(this);
    }

    _showView() {
        const template = this.templateFunction(this.loginHandler);
        this.renderHandler(template);
    }

    async _loginHandler(e){
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if(!email || !password) {
            window.alert('Please fill in all the fields');
            return;
        }

        const user = {email, password};
        const result = await this.authService.login(user);
        if(result){
            this.navigate('/');
        }
    }
}