import Link from 'next/link';

import Container from './styles';

import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

const Login = () => (
  <Container>
    <h1>Login</h1>
    <Input labelValue="Email" container={{ className: 'margin' }} />
    <Input labelValue="Senha" />
    <Button className="button">Login</Button>
    <Link href="/login/register">Não possui cadastro? Clique Aqui</Link>
  </Container>
);

export default Login;
