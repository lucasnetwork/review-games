import Link from 'next/link';

import Container from './styles';

import { useContextProvider } from '../../services/Context';

const Header = () => {
  const { login } = useContextProvider();

  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <h1>Review Games</h1>
        </a>
      </Link>
      {login ? (
        <Link href="/perfil">Perfil</Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </Container>
  );
};

export default Header;
