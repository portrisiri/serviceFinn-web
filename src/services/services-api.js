// // src/stores/api-store.js

// const API_URL = "http://localhost:4289";

// // Service API
// export const ServiceAPI = {
//   getAllServicesByProviderId: async (providerId) => {
//     try {
//       const response = await fetch(`${API_URL}/service/${providerId}`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch services by provider ID:", error);
//       throw error;
//     }
//   },

//   getServiceById: async (serviceId) => {
//     try {
//       const response = await fetch(`${API_URL}/service/${serviceId}`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch service by ID:", error);
//       throw error;
//     }
//   },

//   createService: async (serviceData) => {
//     try {
//       const response = await fetch(`${API_URL}/service/create`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(serviceData),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to create service:", error);
//       throw error;
//     }
//   },

//   updateService: async (serviceId, serviceData) => {
//     try {
//       const response = await fetch(`${API_URL}/service/update/${serviceId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(serviceData),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to update service:", error);
//       throw error;
//     }
//   },

//   deleteService: async (serviceId) => {
//     try {
//       const response = await fetch(`${API_URL}/service/delete/${serviceId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to delete service:", error);
//       throw error;
//     }
//   },
// };

// // Provider API
// export const ProviderAPI = {
//   getAllProviders: async () => {
//     try {
//       const response = await fetch(`${API_URL}/provider/`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch all providers:", error);
//       throw error;
//     }
//   },

//   getFilteredProviders: async (filterParams) => {
//     try {
//       const queryString = new URLSearchParams(filterParams).toString();
//       const response = await fetch(`${API_URL}/provider/filter?${queryString}`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch filtered providers:", error);
//       throw error;
//     }
//   },

//   getProviderById: async (providerId) => {
//     try {
//       const response = await fetch(`${API_URL}/provider/${providerId}`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch provider by ID:", error);
//       throw error;
//     }
//   },

//   updateProviderProfile: async (providerData) => {
//     try {
//       const response = await fetch(`${API_URL}/provider/update`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(providerData),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to update provider profile:", error);
//       throw error;
//     }
//   },

//   activateProvider: async (providerId) => {
//     try {
//       const response = await fetch(`${API_URL}/provider/activate`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ providerId }),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to activate provider:", error);
//       throw error;
//     }
//   },

//   deactivateProvider: async (providerId) => {
//     try {
//       const response = await fetch(`${API_URL}/provider/deactivate`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ providerId }),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to deactivate provider:", error);
//       throw error;
//     }
//   },
// };

// // Category API
// export const CategoryAPI = {
//   getCategories: async () => {
//     try {
//       const response = await fetch(`${API_URL}/category/`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch categories:", error);
//       throw error;
//     }
//   },

//   getSubCategories: async () => {
//     try {
//       const response = await fetch(`${API_URL}/category/subcategory`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch subcategories:", error);
//       throw error;
//     }
//   },

//   getSubCatByCat: async (categoryId) => {
//     try {
//       const response = await fetch(`${API_URL}/category/${categoryId}`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch subcategories by category ID:", error);
//       throw error;
//     }
//   },

//   createSubCategory: async (subCategoryData) => {
//     try {
//       const response = await fetch(`${API_URL}/category/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(subCategoryData),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to create subcategory:", error);
//       throw error;
//     }
//   },

//   deleteSubCat: async (subCatId) => {
//     try {
//       const response = await fetch(`${API_URL}/category/${subCatId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to delete subcategory:", error);
//       throw error;
//     }
//   },
// };

// // Address API
// export const AddressAPI = {
//   createAddress: async (addressData) => {
//     try {
//       const response = await fetch(`${API_URL}/address/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(addressData),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to create address:", error);
//       throw error;
//     }
//   },

//   getAddressById: async (addressId) => {
//     try {
//       const response = await fetch(`${API_URL}/address/${addressId}`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch address by ID:", error);
//       throw error;
//     }
//   },

//   getAddressesByUserId: async (userId) => {
//     try {
//       const response = await fetch(`${API_URL}/address/${userId}`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch addresses by user ID:", error);
//       throw error;
//     }
//   },

//   updateAddress: async (addressId, addressData) => {
//     try {
//       const response = await fetch(`${API_URL}/address/${addressId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(addressData),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to update address:", error);
//       throw error;
//     }
//   },

//   deleteAddress: async (addressId) => {
//     try {
//       const response = await fetch(`${API_URL}/address/${addressId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to delete address:", error);
//       throw error;
//     }
//   },
// };

// // Combined store for application use
// const AppStore = {
//   Service: ServiceAPI,
//   Provider: ProviderAPI,
//   Category: CategoryAPI,
//   Address: AddressAPI,
// };

// export default AppStore;



// -----------------------------------------



import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:4289";

const useProviderStore = create((set) => ({
  providers: [],
  provider: null,
  categories: [],
  subCategories: [],
  loading: false,
  error: null,

  // Fetch All Providers
  getAllProviders: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/provider`);
      set({ providers: response.data.providers, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch providers",
        loading: false,
      });
    }
  },

  // Filter Providers
  // getFilteredProviders: async (subCatId, latitude, longitude, radius) => {
  //   set({ loading: true, error: null });
  //   try {
  //     const response = await axios.get(`${API_URL}/provider/filter`, {
  //       params: { subCatId, latitude, longitude, radius },
  //     });
  //     set({ providers: response.data.results, loading: false });
  //   } catch (error) {
  //     set({
  //       error: error.response?.data?.message || "Failed to fetch providers",
  //       loading: false,
  //     });
  //   }
  // },
  getFilteredProviders: async (
    subCatId,
    latitude,
    longitude,
    radius,
    orderBy,
    sort,
    skip,
    take
  ) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        ${API_URL}/provider/filter?subCatId=${subCatId}&latitude=${latitude}&longitude=${longitude}&radius=${radius}&orderBy=${orderBy}&sort=${sort}&skip=${skip}&take=${take}
      );
      set({ providers: response.data.results, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch providers",
        loading: false,
      });
    }
  },

  // Fetch Provider by Id
  getProviderById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/provider/${id}`);
      set({ provider: response.data.provider, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch provider",
        loading: false,
      });
    }
  },

  // Get Categories
  getCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/category`);
      set({ categories: response.data.results, loading: false });
    } catch (error) {
      set({
        error: "Failed to fetch categories",
        loading: false,
      });
    }
  },

  // Get Subcategories
  getSubCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/category/subcategory`);
      set({ subCategories: response.data.results, loading: false });
    } catch (error) {
      set({
        error: "Failed to fetch subcategories",
        loading: false,
      });
    }
  },
}));

export default useProviderStore;