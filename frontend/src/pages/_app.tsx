import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Container from './styles';

import ContextProvider from '../services/Context';
import GlobalStyles, { ContainerMain } from '../theme/globalstyles';
import light from '../theme/light';

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ContextProvider>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Container>
          <ContainerMain>
            {getLayout(<Component {...pageProps} />)}
          </ContainerMain>
        </Container>
      </ThemeProvider>
    </ContextProvider>
  );
}
export default MyApp;
