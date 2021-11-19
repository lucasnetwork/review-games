import type { NextPage } from 'next';

import CreateOrEditCompany from './company';

import Header from '../../components/Header';

const createCompany: NextPage = () => <CreateOrEditCompany />;

createCompany.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default createCompany;
