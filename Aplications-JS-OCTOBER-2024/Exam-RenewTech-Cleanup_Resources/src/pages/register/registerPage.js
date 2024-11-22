export class RegisterPage {
    constructor(templateFunction, renderHandler, navigate, authService){
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.authService = authService;
        this.showView = this._showView.bind(this);
        this.registerHandler = this._registerHandler.bind(this);
    }

    _showView() {
        const template = this.templateFunction(this.registerHandler);
        this.renderHandler(template);
    }

    async _registerHandler(e){
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('re-password');

        if(!email || !password || !rePassword) {
            window.alert('Please fill in all the fields');
            return;
        }

        if(password != rePassword) {
            window.alert('Incorrect repeat password');
            return;
        }

        const user = {email, password};
        const result = await this.authService.register(user);
        if(result){
            this.navigate('/');
        }
    }
}