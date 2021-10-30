import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Carrousel from 'nuka-carousel';

import { Main, ContainerType } from './styles';

import { ContainerMain } from '../theme/globalstyles';

const Home: NextPage = () => (
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
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
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
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
          <div className="item-container">
            <div className="item" />
            <div className="item" />
          </div>
        </Carrousel>
      </ContainerType>
    </ContainerMain>
  </Main>
);

export default Home;