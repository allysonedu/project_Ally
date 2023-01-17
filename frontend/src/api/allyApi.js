import { api } from '../shared/services';

const acesso = async ({ email, password }) => {
  try {
    const response = await api.post('/secretary_login', { email, password });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createUser = async payload => {
  try {
    const response = await api.post('/secretary', payload);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export { acesso, createUser };
