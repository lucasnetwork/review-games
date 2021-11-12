import { GetServerSideProps, NextPage } from 'next';

import CreateOrEditCompany from './company';

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
