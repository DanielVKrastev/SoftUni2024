export class LikesService {
    constructor(baseUrl){
        this.url = `${baseUrl}/data/likes`;
        this.accessToken = 'accessToken';
    }

    getAccessToken() {
        return localStorage.getItem(this.accessToken);
    }

    async getAllForSolution(id){
        const settings = {
            method: 'GET',
        };

        const response = await fetch(`${this.url}?where=solutionId%3D%22${id}%22&distinct=_ownerId&count`, settings);
        if( ! response.ok){
            window.alert('Failed to fetch likes');
            return;
        }
        const result = await response.json();
        return result;
    }

    async getAllForSolutionAndUser(solutionId, userId){
        const settings = {
            method: 'GET',
        };

        const response = await fetch(`${this.url}?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`, settings);
        if( ! response.ok){
            window.alert('Failed to fetch likes');
            return;
        }
        const result = await response.json();
        return result;
    }

    async addLike(like){
        const accessToken = this.getAccessToken();
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
            body: JSON.stringify(like)
        }

        const response = await fetch(this.url, settings);
        if(!response.ok){
            window.alert('Failed to create like');
        }

        const result = await response.json();

        return result;
    }
}