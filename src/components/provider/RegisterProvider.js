import axios from 'axios';

const registerProvider = async (formData) => {
  try {
    console.log(formData)

    const response = await axios.post(
      'http://localhost:4289/auth/registerProvider',
      formData
    );
    return response.data;
  } catch (error) {
    console.error('Error registering provider:', error);
    throw error; // Rethrow the error for component handling
  }
};

export default registerProvider;