import HttpClient from "./http-client.js";
/**
 * ApiService class to handle API requests for user authentication.
 * It uses the HttpClient class to make HTTP requests.
 */
class ApiService {
    constructor(baseURL) {
        this.httpClient = new HttpClient(baseURL);
    }

    async login(username, password) {
        return this.httpClient.post("/login", { username, password });
    }

    async logout() {
        return this.httpClient.clearAuthToken();
    }
    async register(username, email, password, confirmPassword) {
        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }
        return this.httpClient.post("/register", { username, email, password, confirmPassword });
    }
}

// Export the ApiService class
export default ApiService;