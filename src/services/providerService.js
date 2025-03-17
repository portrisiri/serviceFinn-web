import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:4289";

const useProviderStore = create((set) => ({
  providers: [],
  provider: null,
  loading: false,
  error: null,

  fetchProviders: async () => {
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
}));

export default useProviderStore;
