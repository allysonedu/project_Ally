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

const createAssisted = async payload => {
  try {
    const response = await api.post('/assisteds', payload);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAssisteds = async () => {
  try {
    const response = await api.get('/assisteds');

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getOneAssisteds = async id => {
  try {
    const response = await api.get(`/assisteds/${id}`);

    return response.data;
  } catch (err) {
    throw Error(err.message);
  }
};

const editAssisteds = async payload => {
  try {
    const response = await api.put(`/assisteds/${payload.id}`, payload);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteAssisteds = async assistedId => {
  try {
    const response = await api.delete(`/assisteds/${assistedId}`);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export {
  acesso,
  createUser,
  createAssisted,
  getAssisteds,
  getOneAssisteds,
  editAssisteds,
  deleteAssisteds,
};
