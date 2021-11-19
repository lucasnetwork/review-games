import { GetServerSideProps, NextPage } from 'next';

import CreateOrEditCompany from './company';

import Header from '../../components/Header';
import { findCompany } from '../../services/api/company';

interface createOrEditCompanyProps {
  company?: {
    imageUrl: '';
    description: '';
    name: '';
  };
}
const EditCompany: NextPage<createOrEditCompanyProps> = ({ company }) => (
  <CreateOrEditCompany company={company} />
);

EditCompany.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id) {
    return {
      props: {},
    };
  }
  try {
    const company = await findCompany(params.id);
    company.data.file_url = `${process.env.NEXT_PUBLIC_ANALYTICS_ID}/${company.data.file_url}`;
    const newGames = company.data.games.map((game) => ({
      ...game,
      file_url: `${process.env.NEXT_PUBLIC_ANALYTICS_ID}/${game.file_url}`,
    }));
    company.data.games = newGames;
    return {
      props: {
        company: {
          imageUrl: company.data.file_url,
          description: company.data.description,
          name: company.data.name,
        },
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default EditCompany;
