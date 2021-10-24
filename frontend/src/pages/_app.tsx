import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Container from "./styles";

import Header from "../components/Header";
import GlobalStyles, { ContainerMain } from "../theme/globalstyles";
import light from "../theme/light";

function MyApp({ Component, pageProps }: AppProps) {
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
