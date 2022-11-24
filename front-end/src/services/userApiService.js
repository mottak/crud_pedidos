import api from './api';

const login = async (email, password) => {
  return api.post('login', { email, password }).catch((error) => {
    return error.response;
  });
};

const createNewUser = async (name, email, password, role) => {
  return api
    .post('user', { user: { name, email, password, role } })
    .catch((error) => {
      return error.response;
    });
};

const createNewUserWithAddress = async (user, address) => {
  return api.post('user', { user, address }).catch((error) => {
    return error.response;
  });
};

const getClientsProducts = async () => {
  return api.get('products').catch((error) => {
    return error.response;
  });
};

export default {
  login,
  createNewUser,
  createNewUserWithAddress,
  getClientsProducts,
};
