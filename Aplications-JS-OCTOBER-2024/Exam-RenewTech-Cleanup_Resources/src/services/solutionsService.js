export class SolutionsService {
    constructor(baseUrl){
        this.url = `${baseUrl}/data/solutions`;
        this.accessToken = 'accessToken';
    }

    async getAll(){
        const settings = {
            method: 'GET'
        }

        const response = await fetch(`${this.url}?sortBy=_createdOn%20desc`, settings);
        const result = await response.json();
        return result;
    }

    async get(id){
        const settings = {
            method: 'GET'
        }

        const response = await fetch(`${this.url}/${id}`, settings);
        const result = await response.json();
        return result;
    }

    async addSolution(solution){
        const accessToken = this.getAccessToken();

        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
            body: JSON.stringify(solution)
        }

        const response = await fetch(`${this.url}`, settings);
        if( ! response.ok){
            window.alert('Add Solution failed');
            return;
        }

        const result = await response.json();

        return result;
    }

    async editSolution(id, solution){
        const accessToken = this.getAccessToken();

        const settings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
            body: JSON.stringify(solution)
        }

        const response = await fetch(`${this.url}/${id}`, settings);
        if( ! response.ok){
            window.alert('Edit Solution failed');
            return;
        }

        const result = await response.json();

        return result;
    }

    async deleteSolution(id, solution){
        const accessToken = this.getAccessToken();

        const settings = {
            method: 'DELETE',
            headers: {
                'X-Authorization': accessToken,
            },
        }

        const response = await fetch(`${this.url}/${id}`, settings);
        if( ! response.ok){
            window.alert('Delete failed');
            return;
        }

        const result = await response.json();

        return result;
    }


    getAccessToken() {
        return localStorage.getItem(this.accessToken);
    }
}