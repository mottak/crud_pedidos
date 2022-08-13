import api from './api';

const login = async (email, password) => {
  return api.post('login', { email, password }).catch((error) => {
    return error.response;
  });
};

export default {
  login,
};
