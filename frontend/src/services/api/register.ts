import api from '../api';

export const register = (name: string, email: string, password: string) => {
  console.log(api);

  return api.post('user', {
    name,
    email,
    password,
  });
};
