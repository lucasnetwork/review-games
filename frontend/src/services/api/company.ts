import api from '../api';

interface companiesProps {
  id: number;
  name: string;
  description: string;
  file_url: string;
  alt: string;
}

interface companyProp extends companiesProps {
  games: Array<{
    id: number;
    name: string;
    description: string;
    file_url: string;
  }>;
}

export const findAllCompanies = () => api.get<Array<companiesProps>>('company');

export const findCompany = (id: number) =>
  api.get<companyProp>(`company/${id}`);

export const createCompany = (values: any) => api.post('company', values);
