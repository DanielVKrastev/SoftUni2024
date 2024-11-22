export class AuthService {
    constructor(baseUrl){
        this.url = `${baseUrl}/users`;
        this.accessToken = 'accessToken';
        this.userIdToken = 'userId';
    }

    async register(user){
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }

        const response = await fetch(`${this.url}/register`, settings);
        if( ! response.ok){
            window.alert('Register failed');
            return;
        }

        const result = await response.json();

        //console.log(result);
        this.setAccessToken(result.accessToken);
        this.setUserId(result._id);
        return result;
    } 

    async login(user){
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }

        const response = await fetch(`${this.url}/login`, settings);
        if( ! response.ok){
            window.alert('Login failed');
            return;
        }

        const result = await response.json();

        //console.log(result);
        this.setAccessToken(result.accessToken);
        this.setUserId(result._id);
        return result;
    } 

    async logout() {
        const accessToken = this.getAccessToken();
      //  console.log(accessToken);
        const settings = {
            method: 'GET',
            headers: {
                'X-Authorization': accessToken,
            }
        }

        const response = await fetch(`${this.url}/logout`, settings);
        this.clearAccessToken();
        this.clearUserId();
        return true;
    }

    setAccessToken(token) {
        localStorage.setItem(this.accessToken, token);
    }

    setUserId(token) {
        localStorage.setItem(this.userIdToken, token);
    }

    getAccessToken() {
        return localStorage.getItem(this.accessToken);
    }

    getUserId() {
        return localStorage.getItem(this.userIdToken);
    }

    clearAccessToken(){
        localStorage.removeItem(this.accessToken);
    }

    clearUserId(){
        localStorage.removeItem(this.userIdToken);
    }

    isLoggedIn(){
        return localStorage.getItem(this.accessToken) != undefined;
    }
}