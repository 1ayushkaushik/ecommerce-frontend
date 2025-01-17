// const API_BASE_URL = 'http://localhost:9000/api/v1';

// export const api = {
//   // Auth endpoints
//   login: async (credentials) => {
//     const response = await fetch(`${API_BASE_URL}/user/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     });
//     return response.json();
//   },
  
//   register: async (userData) => {
//     const response = await fetch(`${API_BASE_URL}/user/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//     return response.json();
//   },

//   // Product endpoints
//   // getProducts: async () => {
//   //   const response = await fetch(`${API_BASE_URL}/product/all/products`);
//   //   return response.json();
//   // },

//   getProducts: async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/product/all/products`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         throw error;
//     }
// },

//   createProduct: async (productData) => {
//     const response = await fetch(`${API_BASE_URL}/product`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(productData),
//     });
//     return response.json();
//   },
// };

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
    try {
        const response = await fetch(`${API_BASE_URL}/product/all/products`);
        const data = await response.json();
        return data.products || []; // Extract products array from response
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
},
  // createProduct: async (productData) => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   const response = await fetch(`${API_BASE_URL}/product/create/new/product`, {  // Updated URL
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${user?.access_token}` // Add token if you're using authentication
  //     },
  //     body: JSON.stringify(productData),
  //   });
  //   return response.json();
  // },

  createProduct: async (productData) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log('Making API request to:', `${API_BASE_URL}/product/create/new/product`);
        
        const response = await fetch(`${API_BASE_URL}/product/create/new/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.access_token}`
            },
            body: JSON.stringify(productData),
        });

        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Response data:', data);

        if (!response.ok) {
            throw new Error(data.message || 'Failed to create product');
        }

        return data;
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
},

getCategories: async () => {
  try {
      const response = await fetch(`${API_BASE_URL}/product/categories`);
      const data = await response.json();
      console.log('Categories response:', data); // Debug log
      return data.success ? data.categories : [];
  } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
  }
},

createCategory: async (categoryData) => {
  try {
      const response = await fetch(`${API_BASE_URL}/product/create/category`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(categoryData),
      });
      const data = await response.json();
      console.log('Create category response:', data); // Debug log
      return data;
  } catch (error) {
      console.error('Error creating category:', error);
      throw error;
  }
},
 
};