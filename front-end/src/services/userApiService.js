import api from './api';

const login = async (email, password) => {
  return api.post('login', { email, password }).catch((error) => {
    return error.response;
  });
};

const createNewUser = async (name, email, password, role) => {
  return api.post('user', { name, email, password, role }).catch((error) => {
    return error.response;
  });
};

export default {
  login,
  createNewUser,
};
