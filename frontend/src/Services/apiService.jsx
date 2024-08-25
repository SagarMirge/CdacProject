import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Updated to match your backend
  headers: {
    'Content-Type': 'application/json'
  }
});

// Function for visitor registration
export const visitorRegister = async (email, password, additionalData) => {
  try {
    const response = await api.post('/visitors/register', { email, password, ...additionalData });
    return response.data; // Return response data
  } catch (error) {
    throw error.response.data; // Throw error to handle in components
  }
};

// Function for visitor login
export const visitorLogin = async (email, password) => {
  try {
    const response = await api.post('/visitors/login', { email, password });
    return response.data; // Return response data
  } catch (error) {
    throw error.response.data; // Throw error to handle in components
  }
};

// Function for watchman login
export const watchmanLogin = async (email, password) => {
  try {
    const response = await api.post('/watchmen/login', { email, password });
    return response.data; // Return response data
  } catch (error) {
    throw error.response.data; // Throw error to handle in components
  }
};
