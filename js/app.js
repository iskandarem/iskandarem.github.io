import ApiService from "./api-service.js";

const apiService = new ApiService("https://example.com/api");
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await apiService.login(username, password);
        console.log("Login successful:", response);
        // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials.");
    }
}

async function logout() {
    try {
        await apiService.logout();
        console.log("Logout successful");
        // Handle successful logout (e.g., redirect to login page)
    } catch (error) {
        console.error("Logout failed:", error);
    }
}
async function register() {
    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("reg-confirm-password").value;

    try {
        const response = await apiService.register(username, email, password, confirmPassword);
        console.log("Registration successful:", response);
        // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed. Please check your details.");
    }
}