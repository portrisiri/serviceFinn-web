import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const actionRegister = async (value) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/register`,
      value
    );
    console.log("actionRegister success");
    return response;
  } catch (error) {
    console.error("Registration error:", error);
    return { error: error.message || "Registration failed" };
  }
};

export const useRegisterStore = create((set) => ({
  role: null,
  setRole: (role) => set({ role }),
  step: 1,
  setStep: (step) => set({ step }),
}));
