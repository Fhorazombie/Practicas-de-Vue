// get users with axios
import axios from 'axios';
const obtenerPublicaciones = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching publicaciones:', error);
    throw error;
  }
};