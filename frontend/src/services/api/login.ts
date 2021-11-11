import api from '../api';

export const login = (email: string, password: string) =>
  api.post<{ acess_token: string }>('auth/login', {
    email,
    password,
  });
