import Link from 'next/link';

import Container from './styles';

const Header = () => (
  <Container>
    <h1>Review Games</h1>
    <Link href="/login">Login</Link>
  </Container>
);

export default Header;
