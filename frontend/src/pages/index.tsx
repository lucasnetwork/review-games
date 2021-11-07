import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Carrousel from 'nuka-carousel';
import { useState, useEffect } from 'react';

import { Main, ContainerType } from './styles';

import api from '../services/api';
import { ContainerMain } from '../theme/globalstyles';
import ajustItems from '../utils/ajustItems';
import { findAllGames } from '../services/api/game';
import { findAllCompanies } from '../services/api/company';

interface gamesProps {
  id: number;
  name: string;
  description: string;
  file_url: string;
}
interface companyProps {
  id: number;
  name: string;
  description: string;
  file_url: string;
  alt: string;
}

const Home: NextPage<{
  gamesProps?: Array<gamesProps>;
  companyProps?:Array<companyProps>
}> = ({ gamesProps,companyProps }) => {
  const [games, setGames] = useState([]);
  const [data,setData] = useState<{
    games:Array<Array<gamesProps>>,
    companies:Array<Array<companyProps>>
  }>({
    games:[],
    companies:[]
  })

  useEffect(() => {
    const newData:{
      games:Array<Array<gamesProps>> ,
      companies:Array<Array<companyProps>>
    } = {
      games:[],
      companies:[]
    };
    if(gamesProps){
      newData.games= ajustItems(gamesProps,2,6);
    }
    if(companyProps){
      newData.companies  = ajustItems(companyProps,2,6);

    }
    console.log(newData)
  
    setData(newData)
  }, []);

  return (
    <Main>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerMain>
        <ContainerType>
          <h2>Games</h2>
          <Carrousel
            slidesToShow={5}
            cellSpacing={20}
            slideWidth="239px"
            defaultControlsConfig={{
              nextButtonStyle: {
                display: 'none',
              },
              prevButtonStyle: {
                display: 'none',
              },
              pagingDotsStyle: {
                display: 'none',
              },
            }}
          >
            {data.games.map((game) => (
              <div className="item-container" key={game[0].id}>
                <Link href={`/games/${game[0].id}`}>
                  <div className="item">
                    <img alt={game[0].alt} src={game[0].file_url} />
                  </div>
                </Link>
                {game[1] && (
                  <Link href={`/games/${game[0].id}`}>
                    <div className="item">
                      <img alt={game[1].alt} src={game[1].file_url} />
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </Carrousel>
        </ContainerType>
        <ContainerType>
          <h2>Empresas</h2>
          <Carrousel
            slidesToShow={5}
            cellSpacing={20}
            slideWidth="239px"
            defaultControlsConfig={{
              nextButtonStyle: {
                display: 'none',
              },
              prevButtonStyle: {
                display: 'none',
              },
              pagingDotsStyle: {
                display: 'none',
              },
            }}
          >
            {data.companies.map((company) => (
              <div className="item-container" key={company[0].id}>
                <Link href={`/company/${company[0].id}`}>
                  <div className="item">
                    <img alt={company[0].alt} src={company[0].file_url} />
                  </div>
                </Link>
                {company[1] && (
                  <Link href={`/company/${company[0].id}`}>
                    <div className="item">
                      <img alt={company[1].alt} src={company[1].file_url} />
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </Carrousel>
        </ContainerType>
      </ContainerMain>
    </Main>
  );
};

Home.getInitialProps = async () => {
  let newGames:Array<gamesProps> =[] 
  let newCompanies:Array<companyProps> =[] 
  try{
    const games = await findAllGames();
    newGames = games.data.map(game => ({
      ...game,
      file_url:`${process.env.REACT_APP_URL}/${game.file_url}`
    }))
  
  }catch{
    return {
      
    }
  }

  try{
    const companies = await findAllCompanies();
    newCompanies = companies.data.map(company => ({
      ...company,
      file_url:`${process.env.REACT_APP_URL}/${company.file_url}`
    }))
  
    return {
      gamesProps:newGames, 
      companyProps:newCompanies
    };
  }catch{
    return {
      gamesProps:newGames
    }
  }
};

export default Home;
