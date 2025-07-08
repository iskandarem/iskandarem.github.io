class HttpClient{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async get(endpoint){
        return this.request('GET', endpoint);
    }
    async post(endpoint, data){
        return this.request('POST', endpoint, data);
    }
    async put(endpoint, data){
        return this.request('PUT', endpoint, data);
    }
    async delete(endpoint){
        return this.request('DELETE', endpoint);
    }
    async request(method, endpoint, data = null) {
        const url = `${this.baseURL}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth-token') || ''}`
        };
        const options = {
            method: method,
            headers: headers
        };
        if (data) {
            options.body = JSON.stringify(data);
        }
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error during HTTP request:', error);
            throw error;
        }
    }
    async setAuthToken(token) {
        localStorage.setItem('auth-token', token);
    }
    async clearAuthToken() {
        localStorage.removeItem('auth-token');
        console.log('Auth token cleared');
    }
}

// Export the HttpClient class
export default HttpClient;