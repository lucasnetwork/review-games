import api from '../api';

export const getProfile = () =>
  api.get<{
    email: string;
    name: string;
    id: number;
    existCompany: boolean;
    idCompany: number;
  }>('user/profile');
