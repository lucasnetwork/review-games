import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Carrousel from 'nuka-carousel';
import { useState, useEffect } from 'react';

import { Main, ContainerType } from './styles';

import gamesJson from '../games.json';
import { ContainerMain } from '../theme/globalstyles';

const Home: NextPage = () => {
  const [games, setGames] = useState<
    Array<
      Array<{
        id: number;
        name: string;
        imageURL: string;
        alt: string;
      }>
    >
  >([]);

  useEffect(() => {
    const newGames = [];
    const numberSlides = 6;
    let currentColumn = 0;
    const newArray = [];
    gamesJson.forEach((game, index) => {
      if (newArray[currentColumn] === undefined) {
        newArray[currentColumn] = [];
      }
      newArray[currentColumn].push(game);
      if (
        currentColumn === numberSlides - 1 &&
        newArray[currentColumn].length < 2
      ) {
        currentColumn = 0;
        return;
      }
      if (
        currentColumn > numberSlides - 1 &&
        newArray[currentColumn].length < 2
      ) {
        return;
      }
      currentColumn++;
    });
    console.log(newArray);
    setGames(newArray);
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
            {games.map((game) => (
              <div className="item-container" key={game[0].id}>
                <Link href={`/games/${game[0].id}`}>
                  <div className="item">
                    <img alt={game[0].alt} src={game[0].imageURL} />
                  </div>
                </Link>
                {game[1] && (
                  <Link href={`/games/${game[0].id}`}>
                    <div className="item">
                      <img alt={game[1].alt} src={game[1].imageURL} />
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
};

export default Home;
