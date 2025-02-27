const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/auth";

// *#################### Register User
export const registerUser = async (userData) => {
try {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Registration failed");
    return data;
} catch (error) {
    throw error;
}
};

// *#################### Login User
export const loginUser = async (userData) => {
try {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Login failed");
    return data;
} catch (error) {
    throw error;
}
};
