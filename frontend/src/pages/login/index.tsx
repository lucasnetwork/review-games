import Container from './styles';

import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

const Login = () => (
  <Container>
    <h1>Login</h1>
    <Input labelValue="Email" />
    <Input labelValue="Senha" container={{ className: 'margin' }} />
    <Button className="button">Login</Button>
  </Container>
);

export default Login;
