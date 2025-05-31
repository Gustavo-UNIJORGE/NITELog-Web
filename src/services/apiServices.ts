// src/services/apiService.ts


// --- Configuration ---
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://nitelogdev.discloud.com'; // Adjust if your Go API runs elsewhere or has a different base

// --- Shared Types/Interfaces ---
export interface User {
  id: string; // Or number, depending on your API
  name: string;
  email: string;
  // Add other user-specific fields your API returns
}

export interface AuthResponse {
  token: string;
  user: User;
  message?: string; // Optional success message
}

export interface LoginPayload {
  email: string;
  password: string;
}

// Payload for registration. 'confirmPassword' is handled client-side.
export interface RegisterPayload {
  email: string;
  password: string;
  username: string;
}

// Generic API Error structure (customize if your API has a specific error format)
export interface ApiErrorData {
  message?: string;
  errors?: Record<string, string[]>; // For field-specific errors
  // Add any other error fields your API might return
}

// --- Helper Function to Handle API Responses ---
async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type");
  let responseData;

  if (contentType && contentType.includes("application/json")) {
    responseData = await response.json();
  } else {
    // Handle non-JSON responses if necessary, or assume error for this context
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    // If it's OK but not JSON, and you expect JSON, this might be an issue.
    // For now, we'll assume T might be void or the API should always return JSON for data/errors.
    return undefined as T; // Or handle as appropriate if non-JSON success is expected
  }

  if (!response.ok) {
    const error: Error & { data?: ApiErrorData } = new Error(
      `API Error: ${response.status} - ${responseData?.message || response.statusText}`
    );
    error.data = responseData; // Attach the full error data
    throw error;
  }
  return responseData as T;
}

// --- API Service Object ---
export const apiService = {
  /**
   * Logs in a user.
   * @param credentials - The user's email and password.
   * @returns A promise that resolves to an AuthResponse (token and user data).
   */
  loginUser: async (credentials: LoginPayload): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/users/login`, { // Assuming /auth/login endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse<AuthResponse>(response);
  },

  /**
   * Registers a new user.
   * @param userData - The user's name, email, and password.
   * @returns A promise that resolves to an AuthResponse (token and user data) or just User.
   * Adjust AuthResponse if registration returns something different than login.
   */
  registerUser: async (userData: RegisterPayload): Promise<AuthResponse> => { // Or Promise<User> depending on API
    const response = await fetch(`${API_BASE_URL}/users/register`, { // Assuming /auth/register endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify( userData ),
    });
    return handleResponse<AuthResponse>(response); // Adjust if API returns different structure for register
  },

  // --- Example GET request (can be expanded) ---
  /**
   * Fetches some generic data (requires authentication typically).
   * @param token - The authentication token.
   * @returns A promise that resolves to an array of MyData.
   */
  getSomeProtectedData: async (token: string): Promise<any[]> => { // Replace 'any' with your specific data type
    const response = await fetch(`${API_BASE_URL}/protected/data`, { // Example protected endpoint
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Standard way to send JWT
      },
    });
    return handleResponse<any[]>(response);
  }
  // Add other API functions here (e.g., createItem, updateItem, etc.)
  // Remember to add the 'Authorization' header if they are protected routes.
};