import Container from './styles';

import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

const Login = () => (
  <Container>
    <h1>Login</h1>
    <Input labelValue="Nome" />
    <Input labelValue="Email" container={{ className: 'margin' }} />
    <Input labelValue="Senha" />
    <Button className="button">Login</Button>
  </Container>
);

export default Login;
