import api from '../api';

interface companiesProps {
  id: number;
  name: string;
  description: string;
  file_url: string;
  alt: string;
}

interface companyProp extends companiesProps {}

export const findAllCompanies = () => api.get<Array<companiesProps>>('company');

export const findCompany = (id: number) =>
  api.get<companyProp>(`company/${id}`);
