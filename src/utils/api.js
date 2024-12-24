const API_BASE_URL = 'http://localhost:9000/api/v1';

export const api = {
  // Auth endpoints
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },
  
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  // Product endpoints
  getProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/product`);
    return response.json();
  },

  createProduct: async (productData) => {
    const response = await fetch(`${API_BASE_URL}/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    return response.json();
  },
};