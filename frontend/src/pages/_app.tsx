import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Container from './styles';

import Header from '../components/Header';
import GlobalStyles, { ContainerMain } from '../theme/globalstyles';
import light from '../theme/light';

function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith('/login')) {
    return (
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Container>
          <ContainerMain>
            <Component {...pageProps} />
          </ContainerMain>
        </Container>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Container>
        <ContainerMain>
          <Header />
          <Component {...pageProps} />
        </ContainerMain>
      </Container>
    </ThemeProvider>
  );
}
export default MyApp;
