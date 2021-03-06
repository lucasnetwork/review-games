import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';

import { Main, ImageContainer, ContainerDescription } from './styles';

import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import Header from '../../components/Header';
import useDimension from '../../hooks/useDimension';
import { getProfile } from '../../services/api/user';
import { ContainerMain } from '../../theme/globalstyles';

const Perfil = () => {
  const ref = useRef(null);
  const { width } = useDimension(ref);
  const router = useRouter();
  const [perfil, setPerfil] = useState({
    name: '',
    email: '',
    existCompany: false,
    idCompany: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProfile();
        setPerfil({
          name: response.data.name,
          email: response.data.email,
          existCompany: response.data.existCompany,
          idCompany: response.data.idCompany,
        });
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <Main>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerMain>
        <ImageContainer ref={ref} height={width}>
          <img alt="32" src="" />
        </ImageContainer>
        <ContainerDescription>
          <div>
            <h2>Nome</h2>
            <p>{perfil.name}</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>{perfil.email}</p>
          </div>
          <div>
            <h2>Senha</h2>
            <div>
              <Input
                labelValue="Nova Senha"
                container={{
                  className: 'input',
                }}
              />
              <Button className="button">Confirmar</Button>
            </div>
            <Button
              className="button_company"
              onClick={() => {
                if (perfil.existCompany) {
                  router.push(`/companyAdmin/${perfil.idCompany}`);
                  return;
                }
                router.push('/createCompany');
              }}
            >
              {perfil.existCompany ? 'Verificar empresa' : 'Criar uma empresa'}
            </Button>
          </div>
        </ContainerDescription>
      </ContainerMain>
    </Main>
  );
};

Perfil.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default Perfil;
